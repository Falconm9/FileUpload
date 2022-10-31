#!/bin/bash
cd /home/ec2-user/server/src
npm start
pm2 start npm --name "malware-challenger" -- start