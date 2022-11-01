## Available Scripts

In the project directory, you can run:

### `npm install`
install all dependencies needed.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

runs server
open on [http://localhost:5000](http://localhost:5000)

## Install redis
Bull works with Redis so we need to instal redis on our machine before run **npm start**.  This process can be done in 2 ways; either install Redis on your computer, or use Redis with Docker.

if you prefer docker you could use the image here [Redis Image](https://hub.docker.com/_/redis);

**commands to install redis image on docker**

### `docker run --name some-redis -d redis create`
command to download redis image

### `docker container run --name redis-db -p 8080:6379`
command to create container on default route needed to project

### `docker start redis-db`
command to run redis-db if is stopped.

## AWS Route Deployed proyect

## [Deployed route](http://ec2-3-95-9-151.compute-1.amazonaws.com:3000)