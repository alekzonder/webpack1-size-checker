#!/bin/bash

package="$1"
require="$2"

if [ -z "$package" ]; then
    echo "no package"
    exit 1
fi

curl -XPOST "http://localhost:9001/check?package=${package}&require=${require}"
