#!/bin/bash
pwd
node -v

npm install
npm run build
# pm2 start dist/src/main.js --name daily-book-api
nest start --watch > app.out.log 2> app.err.log < /dev/null &
