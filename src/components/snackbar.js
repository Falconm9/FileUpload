import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const SnackbarComponent = ({open, handleClose, messageInfo}) => {
      
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical:'top', horizontal:'right' }}
      >
        <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity={messageInfo?.type} sx={{ width: '100%' }}>
          {messageInfo?.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default SnackbarComponent;
