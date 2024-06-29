import React from 'react';
import "../fonts/fonts.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddBonfire from './AddBonfire';

const boxStyle = {
  padding: '10px',
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 635,
  height: 450,
  bgcolor: '#FFF1E1',
  color: '#394B6E',
  border: '2px solid #000',
  padding: '33px',
  borderRadius: '25px'
};

// style for 'add new bucket list item' button
const buttonStyle = {
  textTransform: 'none',
  fontFamily: 'Gaegu',
  color: '#394B6E'
}

const boxTitle = {
  fontFamily: 'More Sugar',
  fontSize: '40px',
}

const promptStyle = {
  fontFamily: 'Gaegu', 
  fontSize: '35px',

}


export default function BucketListModal({ open, handleClose }) {
  const [number, setNumber] = React.useState('');
  const [numberFieldIsHovered, setNumberFieldIsHovered] = React.useState(false);
  const [textFieldIsHovered, setTextFieldIsHovered] = React.useState(false);
  const [doneButtonIsHovered, setDoneButtonIsHovered] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://bonfire/invite/Udj2b198HJkL');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const textFieldStyle = {
    borderRadius: '10px',
    transition: 'background-color 0.15s', // Smooth transition for border color change
    fontFamily: 'More Sugar',
    fontSize: '20px'
  }

  const doneButtonStyle = {
    textTransform: 'none',
    backgroundColor: '#F1B150',
    color: doneButtonIsHovered ?'#F1B150' : '#FFF1E1',
    fontFamily: 'Gaegu-Bold',
    width: '160px',
    height: '60px',
    fontSize: '35px',
    marginLeft: '473px',
    marginTop: '30px',
    borderRadius: '10px',
    border: doneButtonIsHovered ? '5px solid #F1B150' : 'none',
    backgroundColor: doneButtonIsHovered ? '#FFF1E1' : '#F1B150',
  }

  const numberFieldStyle = {
    width: '70px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: numberFieldIsHovered ? '#EDDFCF' : '#CACACA',
    transition: 'border-color 0.15s', // Smooth transition for border color change
  };
  
  const numberInputProps = {
    style: {
      fontFamily: 'Gaegu',
      fontSize: '35px',
      color: '#394B6E',
      margin: '-10px',
      paddingLeft: '18px',
    }
  };

  const textStyle = {
    fontFamily: 'Gaegu-Bold',
    fontSize: '30px',
    marginLeft: '10px'
  }

  return (
    <div>
      {/* <AddBonfire onClick={handleOpen} /> */}
      {/* <Button style={buttonStyle} onClick={handleOpen}>Replace with button icon</Button>  // replace this */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label='close'
            style={{ position: 'absolute', top: '20px', right: '20px'}}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography style={boxTitle} id="modal-modal-title" variant="h6" component="h2">
            Create a new bonfire
          </Typography>
          <Typography style={promptStyle} id="modal-modal-description" sx={{  }}>
            How big is your bonfire?
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1}}>
            <TextField 
              type="number"
              value={number}
              onChange={handleNumberChange}
              variant="outlined"
              style={numberFieldStyle}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none', // Remove the outline
                  },
                }
              }}
              InputProps={numberInputProps}
              onMouseEnter={() => setNumberFieldIsHovered(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setNumberFieldIsHovered(false)}
            />
             <Typography style={textStyle} id="modal-modal-description" sx={{ mt: 2 }}>
            friends
          </Typography>
          </Box>
          


          <Typography style={promptStyle} id="modal-modal-description" sx={{ mt: 2 }}>
            Invite your friends to the bonfire:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%', // Take the full width of the modal
              height: '60px',
              mt: 2,
              borderRadius: '10px',
              backgroundColor: textFieldIsHovered ? '#EDDFCF' : '#CACACA',
            }}
            onMouseEnter={() => setTextFieldIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setTextFieldIsHovered(false)}
          >
            <Typography style={textFieldStyle} onClick={handleCopyLink}>
              https://bonfire/invite/Udj2b198HJkL
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%', // Take the full width of the modal
              mt: '5px',
            }}
          >
            <Typography 
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                }
              }} 
              style={{fontFamily: 'Gaegu', color: '#C84242'}}
              onClick={handleCopyLink}
            >
              click to copy link
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            color="primary"
            style={doneButtonStyle}
            onClick={handleClose}
            disableElevation
            onMouseEnter={() => setDoneButtonIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setDoneButtonIsHovered(false)}
            sx={{ cursor: 'pointer'}}
          >
            Done
          </Button>
        </Box>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}