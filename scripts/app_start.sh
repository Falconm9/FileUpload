#!/bin/bash
cd /home/ec2-user/serverReact
npm start
pm2 start npm --name "malware-challenger" -- start
pm2 startup
pm2 save
pm2 restart all