#!/bin/bash

source sentry.properties.sh

./node_modules/.bin/sentry-cli --auth-token $authToken releases --org $org --project $project files $release delete --all --log-level=info

files=`ls ./dist/angular-starter/*{.js.map,.js}`
fName=""
for file in $files
do
   fName=$fName" ./dist/angular-starter/$(basename "$file") "
done
uploadCommand="./node_modules/.bin/sentry-cli --auth-token $authToken releases --org $org --project $project files $release upload-sourcemaps $fName --rewrite --log-level=info"
eval $uploadCommand
