FROM ruby:3.0

RUN apt-get update -qq && apt-get install -yq --no-install-recommends \
    build-essential \
    gnupg2 \
    less \
    git \
    telnet \
    nodejs \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get update -qq && apt-get install -y default-libmysqlclient-dev

WORKDIR /tmp
ADD ./Gemfile Gemfile
ADD ./Gemfile.lock Gemfile.lock
RUN bundle install

# Arguments
ARG APP_HOME="/www/knowledge"
RUN mkdir -p $APP_HOME
RUN mkdir -p $APP_HOME/tmp/pids
WORKDIR $APP_HOME
COPY . $APP_HOME

EXPOSE 3000