#!/bin/bash

APP=sales
PORT=3003

./slave_build.sh "$APP"
docker stop "$APP"
docker rm "$APP"
./slave_start.sh "$APP" "$PORT"
