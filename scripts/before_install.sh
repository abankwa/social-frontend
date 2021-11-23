#!/bin/bash

DIR="/home/ec2-user/social-frontend"
if [ -d "$DIR" ]; then 
    echo "$DIR exists"
else 
    echo "creating directory $DIR"
    mkdir $DIR
fi

sudo chmod -R 777 $DIR