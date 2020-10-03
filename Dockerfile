 
FROM ubuntu:19.10

RUN apt-get update && \
  apt-get install -y xvfb openssl zip

RUN groupadd -r pentaho && \
  useradd --no-log-init -s /bin/bash --home-dir /home/pentaho -m -g pentaho -G root pentaho && \
  mkdir -p /home/pentaho/.pentaho && \
  chown pentaho:pentaho -R /home/pentaho

COPY --chown=pentaho:pentaho pentaho-server /home/pentaho/pentaho-server
COPY --chown=pentaho:pentaho entrypoint /home/pentaho/entrypoint

USER pentaho

WORKDIR /home/pentaho/pentaho-server

ENTRYPOINT ["../entrypoint/start.sh"]
CMD ["./start-pentaho.sh"]