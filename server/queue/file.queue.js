const Bull = require("bull");
const {fileProcess} = require("./file-queue-consumer");

const fileQueue = new Bull(
  "files-queue",
  process.env.REDIS_URL, //you need to have redis installed or use this docker image https://hub.docker.com/_/redis
  {
    limiter: {
      max: 1,
      duration: 1000
    }
  }
);

fileQueue.process(fileProcess);

const addNewFile = async (file) => {
  const jobs = await fileQueue.getJobs();
  const index = jobs.findIndex(item => item.data.fileName === file.fileName); //validate if file is already on queue

  if(index >= 0){
    return {
      message: "file already existed on queue",
      type: 'warning'
    }
  }else{
    fileQueue.add(file) //add file to queue
  }  
    
  return {
    message: "file added successfully",
    type: 'success'
  }
};


const cleanQueue = async () => {
  fileQueue.clean(3600000 , 'completed'); //remove all jobs from redis after 1 hours before complete
  fileQueue.empty();
}

module.exports = {
    addNewFile,
    cleanQueue
}