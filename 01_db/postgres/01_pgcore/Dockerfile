FROM postgres:latest

WORKDIR /var/lib/postgresql/01_pgcore

COPY docker-entrypoint.sh /docker-entrypoint-initdb.d/
COPY . .

EXPOSE 5432

CMD ["postgres"]