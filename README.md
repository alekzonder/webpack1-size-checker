# webpack1-size-checker

## install

```
docker pull alekzonder/webpack1-size-checker:latest
```

## usage

```

docker run --rm -t alekzonder/webpack-size-checker /app/start.sh superagent

# OR with version
docker run --rm -t alekzonder/webpack-size-checker /app/start.sh superagent@3.3.0

# change require module string

docker run --rm -t alekzonder/webpack-size-checker /app/start.sh lodash@4 lodash/get

```

### output
```
installing superagent@*

npm info it worked if it ends with ok
npm info using npm@3.10.9
npm info using node@v6.9.2
npm info config set "progress" "false"
npm info ok
webpack-size-checker@0.0.0 /app
`-- superagent@3.3.0
 +-- component-emitter@1.2.1
 +-- cookiejar@2.1.0
 +-- debug@2.4.4
 | `-- ms@0.7.2
 +-- extend@3.0.0
 +-- form-data@2.1.2
 | +-- asynckit@0.4.0
 | +-- combined-stream@1.0.5
 | | `-- delayed-stream@1.0.0
 | `-- mime-types@2.1.13
 |   `-- mime-db@1.25.0
 +-- formidable@1.0.17
 +-- methods@1.1.2
 +-- mime@1.3.4
 +-- qs@6.3.0
 `-- readable-stream@2.2.2
   `-- isarray@1.0.0

Hash: 0084ca7543af3b8ca6b5
Version: webpack 1.14.0
Time: 192ms
        Asset     Size  Chunks             Chunk Names
app.bundle.js  42.8 kB    0, 1  [emitted]  app
init.bundle.js  3.55 kB       1  [emitted]  init
  [0] ./src/app.js 40 bytes {0} [built]
   + 7 hidden modules


=== bundle size ===

public/app
|-- [ 42K]  app.bundle.js
`-- [3.5K]  init.bundle.js

0 directories, 2 files
```

# LICENSE

MIT
