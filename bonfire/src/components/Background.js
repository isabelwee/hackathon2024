import React from 'react';
import Box from '@mui/material/Box';
import bg from '../images/background.png';

function Background() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
}

export default Background;
