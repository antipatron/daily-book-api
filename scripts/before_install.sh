#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v14.18.1
nvm use v14.18.1

#create our working directory if it doesnt exist
DIR="/home/userdocker/daily-book/daily-book-api"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir -p ${DIR}
fi
