import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function LoginButton() {
  const history = useHistory();

  const buttonStyle = {
    textTransform: 'lowercase',
    backgroundColor: '#FFF1E1',
    color: '#7A5895',
    fontFamily: 'Gaegu-Bold',
    width: '344px',
    height: '75px',
    fontSize: '35px',
    margin: '6px'
  }

  const handleClick = {
    
  }

  return (
    <Button 
      sx={{
        borderRadius: '12px',
        '&:hover': {
          border: '5px solid #7A5895', // Border color and size on hover
        },
        transition: 'all 0.1s ease'
      }} 
      variant="contained" 
      color="primary" 
      style={buttonStyle} disableElevation>
      Login
    </Button>
  );
}

export default LoginButton;