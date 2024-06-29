import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const buttonStyle = {
    textTransform: 'none',
    backgroundColor: '#FFF1E1',
    color: '#7A5895',
    fontFamily: 'Gaegu-Bold',
    width: '344px',
    height: '75px',
    fontSize: '35px',
    margin: '6px'
  }

  const handleClick = () => {
    /* change this!!! */
    navigate('/')
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
      style={buttonStyle} disableElevation
      onClick={handleClick}>
      Login
    </Button>
  );
}

export default LoginButton;