#!/bin/bash

if [ ! -f docker-compose.yml ]; then
	echo "docker-compose.yml not found"
    exit 1
fi

if [ ! -f .env ]; then
	echo "create file .env from env.default"
	cp .env.default .env
fi

docker-compose "$@"

# ./run.sh build
# ./run.sh up -d
# ./run.sh down
# ./run.sh logs php