#!/bin/bash

set -e

DIR_REL=`dirname $0`
cd $DIR_REL
DIR=`pwd`

if [ -z "$DOCKER_PENTAHO_REPOSITORY" ] ; then
    echo "Missing DOCKER_PENTAHO_REPOSITORY environment variable"
    exit 1
fi

if [ ! -d "$DIR/templates/$DOCKER_PENTAHO_REPOSITORY" ] ; then
    echo "Repository '$DOCKER_PENTAHO_REPOSITORY' not supported"
    exit 1
fi

if [ "$DOCKER_PENTAHO_REPOSITORY" == "postgresql" ]
then
    if [[ ! -z "$DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_QUARTZ_URL" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_QUARTZ_USERNAME" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_QUARTZ_PASSWORD" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_URL" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_USERNAME" && \
          ! -z "$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_PASSWORD" ]]
    then
        cp templates/postgresql/context.xml ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_QUARTZ_URL#$DOCKER_PENTAHO_POSTGRES_QUARTZ_URL#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_QUARTZ_USERNAME#$DOCKER_PENTAHO_POSTGRES_QUARTZ_USERNAME#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_QUARTZ_PASSWORD#$DOCKER_PENTAHO_POSTGRES_QUARTZ_PASSWORD#" ../pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml

        cp templates/postgresql/hibernate-settings.xml ../pentaho-server/pentaho-solutions/system/hibernate/hibernate-settings.xml

        cp templates/postgresql/postgresql.hibernate.cfg.xml ../pentaho-server/pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL#" ../pentaho-server/pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME#" ../pentaho-server/pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD#$DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD#" ../pentaho-server/pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml

        cp templates/postgresql/quartz.properties ../pentaho-server/pentaho-solutions/system/quartz/quartz.properties

        cp templates/postgresql/repository.xml ../pentaho-server/pentaho-solutions/system/jackrabbit/repository.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_JACKRABBIT_URL#$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_URL#" ../pentaho-server/pentaho-solutions/system/jackrabbit/repository.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_JACKRABBIT_USERNAME#$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_USERNAME#" ../pentaho-server/pentaho-solutions/system/jackrabbit/repository.xml
        sed -i "s#DOCKER_PENTAHO_POSTGRES_JACKRABBIT_PASSWORD#$DOCKER_PENTAHO_POSTGRES_JACKRABBIT_PASSWORD#" ../pentaho-server/pentaho-solutions/system/jackrabbit/repository.xml
    else
        echo "one of the mandatory postgresql environment variable is missing"
        exit 1
    fi
fi

cd ../pentaho-server

exec "$@"