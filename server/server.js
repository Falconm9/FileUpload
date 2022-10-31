const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const {addNewFile, cleanQueue} = require('./queue/file.queue')

const app = new Koa();
const router = new Router();
const { koaBody } = require('koa-body');
const bodyparser = require('koa-bodyparser');
const port = 5000;

app.use(cors());
app.use(bodyparser()).use(router.routes()).use(router.allowedMethods())
  
router.post('/sendFile',koaBody({ multipart: true, uploadDir: '/tmp' }), async ctx => {
  const file = ctx.request.files.file;

  if(file.mimetype === 'application/x-msdownload' ){
      const response = await addNewFile(
        {
          fileName: file.originalFilename,
          fileType: file.mimetype,
          fileSize: file.size
        }
      );

      ctx.response.body = {
        status: 'ok',
        response,
      };
  }else{
    ctx.response.body = {
      status: 'error',
      response: 'Server is working but file type is not allowed'
    };
  }
});

setInterval(cleanQueue, 60000);


app.listen(port, () => console.log(`Running Server on port ${port}`));
