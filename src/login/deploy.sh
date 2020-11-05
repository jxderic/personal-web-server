#!/bin/bash
echo "deploying"
git pull origin master
docker-compose up -d
docker-compose ps
docker-compose logs server
echo "deploy done"