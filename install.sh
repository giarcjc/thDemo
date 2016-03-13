#!/bin/sh

ECHO "Checking System Requirements...."
command -v node >/dev/null 2>&1 || { echo >&2 "I require node but it's not installed. Please see see https://docs.npmjs.com/getting-started/installing-node. Aborting."; exit 1; }
ECHO "found node version: "
node -v
command -v npm >/dev/null 2>&1 || { echo >&2 "I require npm but it's not installed. Please see see https://docs.npmjs.com/getting-started/installing-node. Aborting."; exit 1; }
ECHO "found npm version: "
npm -v
command -v bower >/dev/null 2>&1 || { echo >&2 "I require bower but it's not installed. Run npm install -g bower . Aborting."; exit 1; }
ECHO "found bower version: "
bower -v

command -v gulp >/dev/null 2>&1 || { echo >&2 "I require gulp but it's not installed. Run npm install -g gulp. Aborting."; exit 1; }
ECHO "found gulp version: "
gulp -v

command -v ruby >/dev/null 2>&1 || { echo >&2 "I require ruby but it's not installed. Please see http://railsapps.github.io/install-ruby.html. Aborting."; exit 1; }
ECHO "found ruby version: "
ruby -v

command -v postgres >/dev/null 2>&1 || { echo >&2 "I require postgres but it's not installed. On Mac try brew install postgresql or see http://stackoverflow.com/questions/4827092/unable-to-install-pg-gem"; exit 1; }
ECHO "found postgres version: "
postgres --version

command -v rails >/dev/null 2>&1 || { echo >&2 "I require rails but it's not installed. Please see http://railsapps.github.io/install-ruby.html. Aborting."; exit 1; }
ECHO "found rails version: "
rails -v

gem install rails-api
bundle install
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
rake db:create
rake db:migrate
cd client
bower install
npm install