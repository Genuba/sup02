#!/bin/bash

cd /var/lib/postgresql/01_pgcore

until psql -U FS_AUWEB_US -d postgres -a -f INSTALL.sql; 
do 
    echo Waiting for PostgreSQL....; 
    sleep 10;
done



