# Docker installation in arch linux

## update the system

`sudo pacman -Syu`

## install docker

`sudo pacman -S docker`

## check docker version

`docker -v`

# SOME BASIC & IMPORTANT DOCKER COMMANDS

## pull docker image

`sudo docker pull <image_name>`

## pull a specific version

`sudo docker pull <image_name>:<version>`

## show all the image

`sudo docker images`

## run the image

`sudo docker run <image_name>`

### It'll create a container from the image

## show all the containers

`sudo docker ps -a`

## show all the container which is running

`sudo docker ps`

## stop container

`sudo docker stop <container_name> OR <container_id>`

## start container

`sudo docker start <container_name> OR <container_id`

## to remove an Docker Image

`sudo docker rmi <image_name> OR <image_id>`

## to remove a container

`sudo docker rm <container_name> OR <container_id>`

## to run a container in detached mode or in background

`sudo docker run -d <image_name>`
