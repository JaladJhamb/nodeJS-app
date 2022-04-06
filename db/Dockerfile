FROM mysql
ENV MYSQL_DATABASE employees_db
COPY ./testdump.sql /docker-entrypoint-initdb.d/
EXPOSE 3306

