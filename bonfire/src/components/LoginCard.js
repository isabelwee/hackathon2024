import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function LoginButton() {
  const buttonStyle = {
    textTransform: 'lowercase',
    backgroundColor: '#FFF1E1',
    color: '#7A5895',
    fontFamily: 'More Sugar'
    
  }
  return (
    <card>
          
    <Button variant="contained" color="primary" style={buttonStyle} disableElevation>
      Log into your account
    </Button>
    </card>
  );
}

export default LoginButton;