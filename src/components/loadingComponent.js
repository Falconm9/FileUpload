import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box sx={{ width: '100%' }} style={{paddingTop: '30px'}}>
      <CircularProgress value={75} />
    </Box>
  )
}
