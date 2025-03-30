FROM mysql:8.0-debian

LABEL org.opencontainers.image.source="https://github.com/saegga/bitrix_ssr"

COPY my.cnf /etc/mysql/conf.d/my.cnf

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["mysqld"]

EXPOSE 3306