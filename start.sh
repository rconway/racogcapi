#!/usr/bin/env bash

docker run --rm --name racogcapi -v $PWD:/usr/share/nginx/html:ro -p 80:80 nginx:mainline-alpine
