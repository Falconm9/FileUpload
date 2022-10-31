import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import UploadButton from './components/uploadButton';
import SnackbarComponent from './components/snackbar';
import FileList from './components/fileList';

function App() {
  const [openNotification, setOpenNotification] = useState(false)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState(null)
  const [itemlist, setItemList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/getFiles",
    })
      .then(function (response) {
        setItemList(response.data.currentQueue)
      })
      .catch(function (response) {
        setItemList([])
      });  
  }, []);

  const saveFile = (formData) => {
    console.log(formData.entries()  )
    setLoading(true);
    axios({
      method: "post",
      url: "http://localhost:5000/sendFile",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setOpenNotification(true);
        setResponseMessage(response.data.response);
        const {type, file} = response.data.response;
        if(type !== "warning"){
          const updateFileList = [...itemlist];
          updateFileList.push({data: file})
          setItemList(updateFileList);
        }
        setLoading(false);
      })
      .catch(function (response) {
        setOpenNotification(true);
        setResponseMessage({
          message: 'Error saving file',
          type: 'error'
        });
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Header />
      <UploadButton saveFile={saveFile} loading={loading} />
      <SnackbarComponent 
        open={openNotification}
        handleClose={() => setOpenNotification(false)}
        messageInfo={responseMessage}
      />
      <FileList itemlist={itemlist}/>
    </div>
  );
}

export default App;
