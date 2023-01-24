FROM ruby:3.0

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV APP=/www/knowledge

RUN apt-get update && apt-get install -y --no-install-recommends \
    sudo \
    htop \
    default-mysql-client \
    default-libmysqlclient-dev \
    libmagic-dev \
    imagemagick \
    nano \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# skip installing gem documentation
RUN chmod 777 /usr/local/bundle && mkdir -p /usr/local/etc && { echo 'install: --no-document'; echo 'update: --no-document'; } >> /usr/local/etc/gemrc

RUN adduser alex_dev
RUN adduser alex_dev sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN mkdir -p $APP
RUN mkdir -p $APP/tmp/pids
RUN sudo chown -R alex_dev $APP

# Instalando Node 14.x
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
RUN sudo apt -y install nodejs

## Usuário
USER alex_dev

WORKDIR $APP

COPY . .

# Adicionando yarn
RUN sudo npm i -g yarn

# Expondo portas
EXPOSE 3000
EXPOSE 9200
EXPOSE 9292

CMD /bin/bash