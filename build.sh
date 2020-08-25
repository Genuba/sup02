#!/bin/bash

usage() {
  cat << EOF
  
Usage: build.sh -[k,d,p][b:] [branch]
Builds a Dockers for Abstract.
	  
Params:
	-k: deploy to kubernets
	-d: deploy to development
	-b: tag or branch to install
		   branchs: $(echo -ne "$(git branch --column)"\\r;)
		   tags: $(echo -ne "$(git tag --column)"\\r;)
	-u: uninstall
Copyright (c) Abstract and/or its affiliates. All rights reserved.
	
EOF
	
}

uninstall() {
	docker rm -f $(docker ps -a -q)
	docker rmi -f $(docker images -a -q)
	sudo rm -rf 01_db/postgress/00_pgdata
}

while getopts hkdub: optname
do
  case $optname in
	h)
		usage
		exit 0;
		;;
	k)
		if [ "$SUPDEPLOY" = "dev" ] 
		then
			uninstall
			sudo rm -rf 02_web/ngx-admin/node_modules
			sudo rm -rf 03_core/01_mguser/node_modules
		fi
		export SUPDEPLOY=prod

		docker build -t pgcore ./01_db/postgres/01_pgcore/
		docker build -t client ./02_web/ngx-admin/
		docker build -t mguser ./03_core/01_mguser/

		docker tag pgcore genuba/pgcore
		docker tag client genuba/client
		docker tag mguser genuba/mguser

		docker push genuba/pgcore:latest
		docker push genuba/client:latest
		docker push genuba/mguser:latest

		kubectl apply -f 00_deploy/prod/k8s/

		exit 0;
	  	;;
	d)
		if [ "$SUPDEPLOY" = "prod" ] 
		then
			uninstall
		fi
		export SUPDEPLOY=dev

		cd 00_deploy/dev

		docker-compose up -d

		docker exec pgcore-service bash -c 'cd var/lib/postgresql/01_pgcore && psql -U FS_AUWEB_US -d postgres -a -f 00_utils/UNINSTALL.sql'

		until docker exec pgcore-service bash -c 'cd var/lib/postgresql/01_pgcore && psql -U FS_AUWEB_US -d postgres -a -f INSTALL.sql'
		do
			echo "Waiting for PostgreSQL..."
			sleep 5
		done
		;;
	b)
		git checkout $OPTARG
		exit 0;
		;;
	u)
		uninstall
		exit 0;
		;;
	?)
		usage;
		exit 1;
	  	;;
	*)
	# Should not occur
		echo "Unknown error while processing options inside build.sh"
		;;
  esac
done

