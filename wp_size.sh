#!/bin/bash
#!/
if [ -z "$WEBPACK_SIZE_CHECKER_HOST" ]; then
    echo "export env var WEBPACK_SIZE_CHECKER_HOST in your ~/.bashrc"
    exit 1
fi

package="$1"
require="$2"

if [ -z "$package" ]; then
    echo "no package"
    exit 1
fi

curl -XPOST "http://localhost:9001/check?package=${package}&require=${require}"
