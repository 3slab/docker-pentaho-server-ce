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

if [[ ! -z "$DOCKER_PENTAHO_TOMCAT_PROXY_PORT" && \
      ! -z "$DOCKER_PENTAHO_TOMCAT_PROXY_NAME" && \
      ! -z "$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME" ]]
then
    cp templates/server.xml ../pentaho-server/tomcat/conf/server.xml
    if [ "$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME" == "https" ]
    then
        sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SETTINGS#proxyName=\"$DOCKER_PENTAHO_TOMCAT_PROXY_NAME\" proxyPort=\"$DOCKER_PENTAHO_TOMCAT_PROXY_PORT\" scheme=\"$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME\" secure=\"true\"#" ../pentaho-server/tomcat/conf/server.xml
    else
        sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SETTINGS#proxyName=\"$DOCKER_PENTAHO_TOMCAT_PROXY_NAME\" proxyPort=\"$DOCKER_PENTAHO_TOMCAT_PROXY_PORT\" scheme=\"$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME\"#" ../pentaho-server/tomcat/conf/server.xml
    fi
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SETTINGS#proxyName=\"$DOCKER_PENTAHO_TOMCAT_PROXY_NAME\" proxyPort=\"$DOCKER_PENTAHO_TOMCAT_PROXY_PORT\" scheme=\"$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME\"#" ../pentaho-server/tomcat/conf/server.xml

    cp templates/server.properties ../pentaho-server/pentaho-solutions/system/server.properties
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_NAME#$DOCKER_PENTAHO_TOMCAT_PROXY_NAME#" ../pentaho-server/pentaho-solutions/system/server.properties
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME#$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME#" ../pentaho-server/pentaho-solutions/system/server.properties
else
    cp templates/server.xml ../pentaho-server/tomcat/conf/server.xml
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SETTINGS##" ../pentaho-server/tomcat/conf/server.xml

    cp templates/server.properties ../pentaho-server/pentaho-solutions/system/server.properties
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_NAME#localhost:8080#" ../pentaho-server/pentaho-solutions/system/server.properties
    sed -i "s#DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME#$DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME#" ../pentaho-server/pentaho-solutions/system/server.properties
fi

if [[ ! -z "$DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS" ]]
then
    cp templates/cda-settings.xml ../pentaho-server/pentaho-solutions/system/cda/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#true#" ../pentaho-server/pentaho-solutions/system/cda/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#$DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#" ../pentaho-server/pentaho-solutions/system/cda/settings.xml

    cp templates/pentaho-cdf-dd-settings.xml ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#true#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#$DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml

    cp templates/pentaho-cdf-settings.xml ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#true#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#$DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml

    cp templates/pentaho.xml ../pentaho-server/pentaho-solutions/system/pentaho.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#true#" ../pentaho-server/pentaho-solutions/system/pentaho.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#$DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS#" ../pentaho-server/pentaho-solutions/system/pentaho.xml
else
    cp templates/cda-settings.xml ../pentaho-server/pentaho-solutions/system/cda/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#false#" ../pentaho-server/pentaho-solutions/system/cda/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS##" ../pentaho-server/pentaho-solutions/system/cda/settings.xml

    cp templates/pentaho-cdf-dd-settings.xml ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#false#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS##" ../pentaho-server/pentaho-solutions/system/pentaho-cdf-dd/settings.xml

    cp templates/pentaho-cdf-settings.xml ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#false#" ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS##" ../pentaho-server/pentaho-solutions/system/pentaho-cdf/settings.xml

    cp templates/pentaho.xml ../pentaho-server/pentaho-solutions/system/pentaho.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ENABLE#false#" ../pentaho-server/pentaho-solutions/system/pentaho.xml
    sed -i "s#DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS##" ../pentaho-server/pentaho-solutions/system/pentaho.xml
fi

if [[ ! -z "$DOCKER_PENTAHO_AUTH_MODE" && \
      "$DOCKER_PENTAHO_AUTH_MODE" == "saml" ]]
then
    cp templates/saml/applicationContext-spring-security-saml.xml ../pentaho-server/pentaho-solutions/system/applicationContext-spring-security-saml.xml
    cp templates/saml/logout.jsp ../pentaho-server/tomcat/webapps/pentaho/logout.jsp
    cp templates/saml/pentaho.saml.cfg ../pentaho-server/pentaho-solutions/system/karaf/etc/pentaho.saml.cfg
    cp templates/saml/pentaho-saml-sample-9.0.0.0-423.kar ../pentaho-server/pentaho-solutions/system/karaf/deploy/
    #cp -R templates/saml/metadata ../pentaho-server/pentaho-solutions/
    sed -i "s#APPLICATION_CONTEXT_SAML_IMPORT#applicationContext-spring-security-saml.xml#" ../pentaho-server/pentaho-solutions/system/pentaho-spring-beans.xml
    sed -i "s#AUTH_SECURITY_PROVIDER#saml#" ../pentaho-server/pentaho-solutions/system/security.properties
    if  [[ ! -z "$DOCKER_PENTAHO_IDP_CERT" ]]
    then
        echo "$DOCKER_PENTAHO_IDP_CERT" | tee /tmp/idp_cert.crt
        set +e
        /home/pentaho/pentaho-server/jre/bin/keytool -importcert -alias idpca -file /tmp/idp_cert.crt -trustcacerts -keystore /home/pentaho/pentaho-server/jre/lib/security/cacerts -storepass changeit -noprompt
    else
        echo "the idp certificat is a mandatory environnement variable in the SAML mode"
        exit 1
    fi
else
    sed -i '/APPLICATION_CONTEXT_SAML_IMPORT/d' ../pentaho-server/pentaho-solutions/system/pentaho-spring-beans.xml
    sed -i "s#AUTH_SECURITY_PROVIDER#jackrabbit#" ../pentaho-server/pentaho-solutions/system/security.properties

fi
cd ../pentaho-server

exec "$@"
