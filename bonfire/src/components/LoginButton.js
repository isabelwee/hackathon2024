import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';

function LoginButton() {
  const buttonStyle = {
    textTransform: 'lowercase',
    backgroundColor: '#FFF1E1',
    color: '#7A5895',
    fontFamily: 'Gaegu'
    
  }
  return (
    <Button variant="contained" color="primary" style={buttonStyle} disableElevation>
      Login
    </Button>
  );
}

export default LoginButton;