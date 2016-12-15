#!/bin/bash

package_full="$1"

package=`node -e "var parts='${package_full}'.split('@'); console.log((parts[0]) ? parts[0] : '');"`
version=`node -e "var parts='${package_full}'.split('@'); console.log((parts[1]) ? parts[1] : '');"`

if [ -z "$package" ]; then
    echo "ERROR: no package"
    exit 1
fi

if [ -z "$version" ]; then
    version="*"
fi

printf "\ninstalling $package@$version\n\n"

npm set progress=false

npm i --silent $package@$version

echo "var $package = require('$package');" > ./src/app.js

rm -rf ./public/app

./node_modules/.bin/webpack

printf "\n\n=== bundle size ===\n\n"

tree -h public/app
