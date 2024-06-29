import React from 'react';
import Box from '@mui/material/Box';

import bg from "../images/background.png";

function Background() {
  return (
      <Box
      className="home-content"
      sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          zIndex: "-1",
      }}
      >
      </Box>
    );
  }

export default Background;