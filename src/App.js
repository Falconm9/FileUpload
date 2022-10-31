import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import UploadButton from './components/uploadButton';
import SnackbarComponent from './components/snackbar';

function App() {
  const [openNotification, setOpenNotification] = useState(false)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState(null)

  const saveFile = (formData) => {
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
        setLoading(false);
      })
      .catch(function (response) {
        setOpenNotification(true);
        setResponseMessage({
          message: 'Error',
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
    </div>
  );
}

export default App;
