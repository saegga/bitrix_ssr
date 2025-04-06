SHELL := /bin/bash

.DEFAULT_GOAL := help

up: ## up containers
	./run.sh up -d

down: ## down containers
	./run.sh down

build: ## build containers
	./run.sh build

logs: ## logs all services
	./run.sh logs -f

logs-%: ## log of concrete service make logs-php
	./run.sh logs -f $*

restart: ## restart containers
	./run.sh down && ./run.sh up -d

rebuild: ## rebuild and start containers
	./run.sh down
	./run.sh build
	./run.sh up -d

ps: ## ps containers active
	./run.sh ps

# make up
# make down
# make build
# make logs-nginx
# make rebuild