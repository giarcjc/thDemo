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

command -v rails >/dev/null 2>&1 || { echo >&2 "I require rails but it's not installed. Please see http://railsapps.github.io/install-ruby.html. Aborting."; exit 1; }
ECHO "found rails version: "
rails -v

cd client
bower install
npm install