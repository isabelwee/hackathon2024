import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';

function SignUpButton() {
  const buttonStyle = {
    textTransform: 'lowercase',
    backgroundColor: '#7A5895',
    color: '#FFF1E1',
    fontFamily: 'Gaegu-Bold',
    width: '344px',
    height: '75px',
    fontSize: '35px',
    margin: '6px'
  }

  return (
    <Button       sx={{
      borderRadius: '12px',
      '&:hover': {
        border: '5px solid #FFF1E1', // Border color and size on hover
      },
      transition: 'all 0.1s ease'
    }} 
    variant="contained" 
    color="primary" 
    style={buttonStyle} disableElevation>
      Sign Up
    </Button>
  );
}

export default SignUpButton;