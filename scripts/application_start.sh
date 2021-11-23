#!/bin/bash

cd /home/ec2-user/social-frontend

#install node modules
npm install

#reload app
pm2 reload next