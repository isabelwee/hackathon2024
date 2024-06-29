import React from 'react';
import "../fonts/fonts.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function WelcomeButton() {
  const navigate = useNavigate();

  const buttonStyle = {
    textTransform: 'lowercase',
    backgroundColor: '#F1B150',
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
      border: '5px solid transparent', // Initial transparent border
      '&:hover': {
        borderColor: 'transparent', // Maintain the transparent border
        boxShadow: '0 0 0 5px #7A5895', // Create a border-like effect with box-shadow
      },
      transition: 'all 0.1s ease',
      padding: '1em',
    }}
      variant="contained" 
      color="primary" 
      style={buttonStyle} disableElevation
      onClick={handleClick}>
      Welcome back
    </Button>
  );
}

export default WelcomeButton;