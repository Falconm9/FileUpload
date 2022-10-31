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

after run redis image you will need set a process.env called REDIS_URL. something like:

**process.env.REDIS_URL =  'redis://user:pass@localhost:49153'**
