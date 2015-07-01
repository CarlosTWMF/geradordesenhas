#!/bin/sh

DOCKER_IMAGE_NAME="geradordesenhas"
WORK_DIR="/home/carlos/workspaces/node"
docker stop $(docker ps | grep $DOCKER_IMAGE_NAME | awk '{print $1}')
docker build -t $DOCKER_IMAGE_NAME .
docker run -p 3000:3000 -d -v `pwd`:$WORK_DIR $DOCKER_IMAGE_NAME 
