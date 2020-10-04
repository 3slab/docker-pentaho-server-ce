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
    if  [[ -z "$DOCKER_PENTAHO_IDP_CERT" || \
           -z "$DOCKER_PENTAHO_IDP_URL" || \
           -z "$DOCKER_PENTAHO_SP_CERT" || \
           -z "$DOCKER_PENTAHO_SP_KEY" || \
           -z "$DOCKER_PENTAHO_LDAP_ROLE_ATTRIBUTE" ]]
    then
        echo "some SAML mandatory environnement variables is missing"
        exit 1
    fi

    sed -i "s#PENTAHO_DOCKER_SSO_ENABLED#<init-param><param-name>ssoEnabled</param-name><param-value>true</param-value></init-param>#" templates/saml/web.xml
    cp templates/saml/web.xml ../pentaho-server/tomcat/webapps/pentaho/WEB-INF/web.xml

    cp templates/saml/applicationContext-spring-security-saml.xml ../pentaho-server/pentaho-solutions/system/applicationContext-spring-security-saml.xml
    cp templates/saml/logout.jsp ../pentaho-server/tomcat/webapps/pentaho/logout.jsp
    
    sed -i "s#DOCKER_PENTAHO_IDP_URL#$DOCKER_PENTAHO_IDP_URL#" templates/saml/pentaho.saml.cfg
    sed -i "s#DOCKER_PENTAHO_LDAP_ROLE_ATTRIBUTE#$DOCKER_PENTAHO_LDAP_ROLE_ATTRIBUTE#" templates/saml/pentaho.saml.cfg

    cp templates/saml/pentaho.saml.cfg ../pentaho-server/pentaho-solutions/system/karaf/etc/pentaho.saml.cfg
    cp templates/saml/pentaho-saml-sample-9.0.0.0-423.kar ../pentaho-server/pentaho-solutions/system/karaf/deploy/

    sed -i "s#DOCKER_PENTAHO_APPLICATION_CONTEXT_SAML_IMPORT#applicationContext-spring-security-saml.xml#" ../pentaho-server/pentaho-solutions/system/pentaho-spring-beans.xml
    sed -i "s#DOCKER_PENTAHO_AUTH_SECURITY_PROVIDER#saml#" ../pentaho-server/pentaho-solutions/system/security.properties
    
    echo -e "-----BEGIN CERTIFICATE-----\n$DOCKER_PENTAHO_IDP_CERT\n-----END CERTIFICATE-----" > /tmp/idp_cert.crt
    set +e
    /home/pentaho/pentaho-server/jre/bin/keytool -importcert -alias idpca -file /tmp/idp_cert.crt -trustcacerts -keystore /home/pentaho/pentaho-server/jre/lib/security/cacerts -storepass changeit -noprompt

    sed -i "s#DOCKER_PENTAHO_IDP_CERT#$DOCKER_PENTAHO_IDP_CERT#" ../entrypoint/templates/saml/metadata/idp-metadata.xml
    sed -i "s#DOCKER_PENTAHO_IDP_ENTITYID#$DOCKER_PENTAHO_IDP_ENTITYID#" ../entrypoint/templates/saml/metadata/idp-metadata.xml
    sed -i "s#DOCKER_PENTAHO_IDP_LOGOUTURL#$DOCKER_PENTAHO_IDP_LOGOUTURL#" ../entrypoint/templates/saml/metadata/idp-metadata.xml
    sed -i "s#DOCKER_PENTAHO_IDP_SSOURL#$DOCKER_PENTAHO_IDP_SSOURL#" ../entrypoint/templates/saml/metadata/idp-metadata.xml

    sed -i "s#DOCKER_PENTAHO_SP_CERT#$DOCKER_PENTAHO_SP_CERT#" ../entrypoint/templates/saml/metadata/sp-metadata.xml
    sed -i "s#DOCKER_PENTAHO_SP_HOSTNAME#$DOCKER_PENTAHO_SP_HOSTNAME#" ../entrypoint/templates/saml/metadata/sp-metadata.xml

    echo -e "-----BEGIN CERTIFICATE-----\n$DOCKER_PENTAHO_SP_CERT\n-----END CERTIFICATE-----" > /tmp/sp_cert.crt
    echo -e "-----BEGIN PRIVATE KEY-----\n$DOCKER_PENTAHO_SP_KEY\n-----END PRIVATE KEY-----" > /tmp/sp_key.pem
    openssl pkcs12 -export -in /tmp/sp_cert.crt -inkey /tmp/sp_key.pem -name pentaho -out /tmp/sp.p12 -password pass:changeit
    /home/pentaho/pentaho-server/jre/bin/keytool -importkeystore -deststorepass changeit -destkeystore ../entrypoint/templates/saml/metadata/keystore.jks -srckeystore /tmp/sp.p12 -srcstorepass changeit -srcstoretype PKCS12 -noprompt
    /home/pentaho/pentaho-server/jre/bin/keytool -importcert -alias idpca -file /tmp/idp_cert.crt -trustcacerts -keystore ../entrypoint/templates/saml/metadata/keystore.jks -storepass changeit -noprompt

    cp -r templates/saml/metadata ../pentaho-server/pentaho-solutions/
else
    sed -i '/DOCKER_PENTAHO_APPLICATION_CONTEXT_SAML_IMPORT/d' ../pentaho-server/pentaho-solutions/system/pentaho-spring-beans.xml
    sed -i "s#DOCKER_PENTAHO_AUTH_SECURITY_PROVIDER#jackrabbit#" ../pentaho-server/pentaho-solutions/system/security.properties
fi

cd ../pentaho-server

exec "$@"
