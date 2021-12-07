#!/bin/bash
pwd
node -v

npm install
npm run build
npm run start:dev > app.out.log 2> app.err.log < /dev/null &
