#!/bin/bash
exec "$(dirname "$0")"/node_modules/.bin/pandoc-url2cite "$@"