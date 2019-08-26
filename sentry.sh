#!/bin/bash

./node_modules/.bin/sentry-cli --auth-token <your-auth-token> releases --org <your-org> --project <your-project> files <your-release> delete --all --log-level=info

files=`ls ./dist/angular-ngrx-material-starter/*{.js.map,.js}`
fName=""
for file in $files
do
   fName=$fName" ./dist/angular-ngrx-material-starter/$(basename "$file") "
done

uploadCommand="./node_modules/.bin/sentry-cli --auth-token <your-auth-token> releases --org <your-org> --project <your-project> files <your-release> upload-sourcemaps $fName --rewrite --log-level=info"
eval $uploadCommand
