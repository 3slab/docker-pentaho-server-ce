# Pentaho Server CE docker image

This is an unofficial docker image for Pentaho Server CE.

## Usage

```
docker run --rm --name pentaho -e DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL=.... 3slab/pentaho-server-ce:9.0.0-423
```

You need to provide ten mandatory environment variables :

Variable | Description | Example
--- | --- | ---
`DOCKER_PENTAHO_REPOSITORY` | The Pentaho repository database type (for now only Postgres is supported) | `postgresql`
`DOCKER_PENTAHO_POSTGRES_HIBERNATE_URL` | The JDBC url for the hibernate DB | `jdbc:postgresql://localhost:5432/hibernate`
`DOCKER_PENTAHO_POSTGRES_HIBERNATE_USERNAME` | The username for the hibernate DB | `hibuser`
`DOCKER_PENTAHO_POSTGRES_HIBERNATE_PASSWORD` | The password for the hibernate DB | `password`
`DOCKER_PENTAHO_POSTGRES_QUARTZ_URL` | The JDBC url for the Quartz DB | `jdbc:postgresql://localhost:5432/quartz`
`DOCKER_PENTAHO_POSTGRES_QUARTZ_USERNAME` | The username for the Quartz DB | `pentaho_user`
`DOCKER_PENTAHO_POSTGRES_QUARTZ_PASSWORD` | The password for the Quartz DB | `password`
`DOCKER_PENTAHO_POSTGRES_JACKRABBIT_URL` | The JDBC url for the Jackrabbit DB | `jdbc:postgresql://localhost:5432/jackrabbit`
`DOCKER_PENTAHO_POSTGRES_JACKRABBIT_USERNAME` | The username for the Jackrabbit DB | `jcr_user`
`DOCKER_PENTAHO_POSTGRES_JACKRABBIT_PASSWORD` | The password for the Jackrabbit DB | `password`
`DOCKER_PENTAHO_TOMCAT_PROXY_PORT` | Set tomcat proxyPort settings in Connection | ``
`DOCKER_PENTAHO_TOMCAT_PROXY_NAME` | Set tomcat proxyName settings in Connection | ``
`DOCKER_PENTAHO_TOMCAT_PROXY_SCHEME` | Set tomcat scheme settings in Connection (if https adds secure settings) | ``
`DOCKER_PENTAHO_CORS_ALLOWED_DOMAINS` | Enable CORS and setup allowed domains | ``
`DOCKER_PENTAHO_LOGGING_VERBOSE` | Make pentaho really verbose in stdout (put `true` to activate) | ``

* **SAML AUTH Mode activation :**

Variable | Description | Example
`DOCKER_PENTAHO_AUTH_MODE` | Set the authentification method ex: SAML (if not set it will use the Jackrabbit authentification method) | ``
`DOCKER_PENTAHO_LDAP_ROLE_ATTRIBUTE` | the LDAP arttibute used to correlate the Pentaho Roles | ``
`DOCKER_PENTAHO_IDP_URL` | The url of the service we will be using as a identification provider | ``
`DOCKER_PENTAHO_IDP_CERT` | this variable s mandatory when the auth mode is SAML and his value is the IDP certificat | ``
`DOCKER_PENTAHO_IDP_ENTITYID` | this variable s mandatory when the auth mode is SAML and his value is the IDP entity id in idp-metadata.xml file | ``
`DOCKER_PENTAHO_IDP_LOGOUTURL` | this variable s mandatory when the auth mode is SAML and his value is the IDP logout url in idp-metadata.xml file | ``
`DOCKER_PENTAHO_IDP_SSOURL` | this variable s mandatory when the auth mode is SAML and his value is the IDP sso url in idp-metadata.xml file | ``
`DOCKER_PENTAHO_SP_CERT` | this variable s mandatory when the auth mode is SAML and his value is the SP certificat | 
`DOCKER_PENTAHO_SP_KEY` | this variable s mandatory when the auth mode is SAML and his value is the SP private key | ``
`DOCKER_PENTAHO_SP_HOSTNAME` | this variable s mandatory when the auth mode is SAML and his value is the SP (pentaho) hostname in sp-metadata.xml file | ``

Look at the [docker-compose file](./docker-compose.yaml) for example.

## Developpement environnement setup

### Requirements

* docker-compose (>= 1.18) (check out [install procedure](https://docs.docker.com/compose/install/))
* git (`sudo apt install git-all`)
* GIT LFS (https://git-lfs.github.com/)

Clone the code source and run this commands

```bash
git lfs install
git lfs pull
```

add this line to your hosts file (/etc/hosts)

```
127.0.0.1 dev-pentaho.com
```

For the mandatory environment variables you can configure them in the `docker-compose.yaml`

if you want to use SAML authentification method make sure that all the SAML environment variables are well configured and if you want to use only the standard authentification method remove all SAML environment variables

run this command to start

```bash
docker-compose build
docker-compose up
```

Run postgress database script (scripts are in [pentaho-server/data/postgresql](./pentaho-server/data/postgresql/)), to connect to database run this commands:

```bash
docker-compose exec db bash
psql -h pentaho-postgre -U postgres # password => example
```

Open `dev-pentaho.com:8081` to access to your dashboard (test@pentaho.com/test)

You can also add users in your ldap admin (`dev-pentaho.com:8080`) and assign a Pentaho Role in the LDAP arttibute used to correlate the Pentaho Roles

## Image release commands

```
docker build -t 3slab/pentaho-server-ce:<version> .
docker push 3slab/pentaho-server-ce:<version>
```

## Image build guide

**IMPORTANT : this repository uses [GIT LFS](https://git-lfs.github.com/) to store [large files](./.gitattributes). Install this git extension before cloning it. And don't forget to `git lfs pull` after cloning**

### Download

* [Java JDK 8](https://download.java.net/openjdk/jdk8u41/ri/openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz)
* [MySQL Connector JDBC (for Azure SSL Connection)](https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.49.zip)
* [Pentaho Archive](https://netix.dl.sourceforge.net/project/pentaho/Pentaho%209.0/server/pentaho-server-ce-9.0.0.0-423.zip)
* [PostgreSQL Connector JDBC](https://jdbc.postgresql.org/download/postgresql-42.2.12.jar)

### Installation

Follow the officiel documentation.

* [Archive installation process](https://help.pentaho.com/Documentation/9.0/Setup/Archive_installation)

* *Additional step : put [JAVA 8 JRE folder](https://download.java.net/openjdk/jdk8u41/ri/openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz) inside the `pentaho-server` folder.*

* [Use PostgreSQL as Your Repository Database (Archive installation)](https://help.pentaho.com/Documentation/9.0/Setup/Use_PostgreSQL_as_Your_Repository_Database_(Archive_installation))

* [Starting the Pentaho Server after an archive installation](https://help.pentaho.com/Documentation/9.0/Setup/Starting_the_Pentaho_Server_after_an_archive_installation)

**IMPORTANT : you have to setup the mandatory database in postgres using scripts in [data postgresql folder](./pentaho-server/data/postgresql) yourself**

### Changes made in Pentaho Archive

1. Removed `promptuser.sh`

2. Log to sdtout in karaf :

In file `pentaho-server/pentaho-solutions/system/karaf/etc/org.ops4j.pax.logging.cfg`, comment the lines :

```
log4j2.rootLogger.appenderRef.RollingFile.ref = RollingFile
log4j2.rootLogger.appenderRef.PaxOsgi.ref = PaxOsgi

log4j2.rootLogger.appenderRef.Console.filter.threshold.type = ThresholdFilter
log4j2.rootLogger.appenderRef.Console.filter.threshold.level = ${karaf.log.console:-OFF}

log4j2.logger.audit.appenderRef.AuditRollingFile.ref = AuditRollingFile

log4j2.appender.rolling.type = RollingRandomAccessFile
log4j2.appender.rolling.name = RollingFile
log4j2.appender.rolling.fileName = ${karaf.log}/karaf.log
log4j2.appender.rolling.filePattern = ${karaf.log}/karaf.log.%i

log4j2.appender.rolling.append = true
log4j2.appender.rolling.layout.type = PatternLayout
log4j2.appender.rolling.layout.pattern = ${log4j2.pattern}
log4j2.appender.rolling.policies.type = Policies
log4j2.appender.rolling.policies.size.type = SizeBasedTriggeringPolicy
log4j2.appender.rolling.policies.size.size = 16MB

log4j2.appender.audit.type = RollingRandomAccessFile
log4j2.appender.audit.name = AuditRollingFile
log4j2.appender.audit.fileName = ${karaf.log}/security.log
log4j2.appender.audit.filePattern = ${karaf.log}/security-%i.log
log4j2.appender.audit.append = true
log4j2.appender.audit.layout.type = PatternLayout
log4j2.appender.audit.layout.pattern = %m%n
log4j2.appender.audit.policies.type = Policies
log4j2.appender.audit.policies.size.type = SizeBasedTriggeringPolicy
log4j2.appender.audit.policies.size.size = 8MB
```

3. Don't start tomcat in the background. In file `pentaho-server/tomcat/bin/startup.sh`, replace `exec "$PRGDIR"/"$EXECUTABLE" start "$@"` by `exec "$PRGDIR"/"$EXECUTABLE" run`

4. Log to sdtout for tomcat. 

* In file `pentaho-server/tomcat/conf/logging.properties` :

Replace `handlers = 1catalina.org.apache.juli.AsyncFileHandler, 2localhost.org.apache.juli.AsyncFileHandler, 3manager.org.apache.juli.AsyncFileHandler, 4host-manager.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler`
By `handlers = java.util.logging.ConsoleHandler`

Replace `.handlers = 1catalina.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler`
By `.handlers = java.util.logging.ConsoleHandler`

Replace `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].handlers = 2localhost.org.apache.juli.AsyncFileHandler`
By `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].handlers = java.util.logging.ConsoleHandler`

Replace `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].handlers = 3manager.org.apache.juli.AsyncFileHandler`
By `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].handlers = java.util.logging.ConsoleHandler`

Replace `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].handlers = 4host-manager.org.apache.juli.AsyncFileHandler`
By `org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].handlers = java.util.logging.ConsoleHandler`

* In file `pentaho-server/tomcat/conf/server.xml`

Replace 

```
<Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />
```

By

```
<Valve className="org.apache.catalina.valves.AccessLogValve" directory="/proc/self/fd"
               prefix="1" suffix="" rotatable="false"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />
```

* In file `pentaho-server/tomcat/webapps/pentaho/WEB-INF/classes/log4j.xml`, comment the lines :

```
<appender name="PENTAHOFILE" class="org.apache.log4j.DailyRollingFileAppender">

    <param name="File" value="../logs/pentaho.log"/>
    <param name="Append" value="false"/>

    <!-- Rollover at midnight each day -->
    <param name="DatePattern" value="'.'yyyy-MM-dd"/>

    <!-- Rollover at the top of each hour
    <param name="DatePattern" value="'.'yyyy-MM-dd-HH"/>
    -->

    <layout class="org.apache.log4j.PatternLayout">
        <!-- The default pattern: Date Priority [Category] Message\n -->
        <param name="ConversionPattern" value="%d %-5p [%c] %m%n"/>

        <!-- The full pattern: Date MS Priority [Category] (Thread:NDC) Message\n
        <param name="ConversionPattern" value="%d %-5r %-5p [%c] (%t:%x) %m%n"/>
        -->
    </layout>
</appender>

<appender name="pdi-execution-appender" class="org.apache.log4j.rolling.RollingFileAppender">
    <rollingPolicy class="org.apache.log4j.rolling.TimeBasedRollingPolicy">
        <param name="ActiveFileName"  value="../logs/pdi.log" />
        <param name="FileNamePattern" value="../logs/pdi.%d{yyyy-MM-dd}.log" />
    </rollingPolicy>
    <layout class="org.apache.log4j.PatternLayout">
        <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5p &lt;%t&gt; %m%n"/>
    </layout>
</appender>
```

* change `docbase` to `docBase` in `pentaho-server/tomcat/webapps/pentaho/META-INF/context.xml`

* Remove `pentaho-marketplace` in `pentaho-server/pentaho-solutions/system/karaf/etc/org.apache.karaf.features.cfg` because link in main menu is not working in this CE version

```
   pdi-engine-configuration,\
-  pentaho-marketplace,\
   get-fields-plugin,\
```

* Fix bug of env variable undefined in child script. In file `pentaho-server/start-pentaho.sh`, add `export` keyword before the JAVA_HOME env variable.
