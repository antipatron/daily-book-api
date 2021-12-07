#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/userdocker/daily-book/daily-book-api

sudo mv /home/userdocker/Desktop/jenkins/jenkins_home/workspace/pipeline-qa-daily-fs /home/userdocker/daily-book/daily-book-api

#navigate into our working directory where we have all our github files
cd /home/userdocker/daily-book/daily-book-api

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

# para usar pm2
# npm install pm2@latest -g

#install node modules
npm install
npm run build
# pm2 start dist/src/main.js --name daily-book-api
npm run start:prod > app.out.log 2> app.err.log < /dev/null &

#start our node app in the background
# node app.js > app.out.log 2> app.err.log < /dev/null &
