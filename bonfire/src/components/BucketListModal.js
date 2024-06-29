import React, { useState } from 'react';
import "../fonts/fonts.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
  borderRadius: '25px',
};

// const buttonStyle = {
//   textTransform: 'none',
//   fontFamily: 'Gaegu',
//   color: '#394B6E',
// };

const boxTitle = {
  fontFamily: 'More Sugar',
  fontSize: '40px',
};

const promptStyle = {
  fontFamily: 'Gaegu',
  fontSize: '35px',
};

export default function BucketListModal({ open, handleClose, handleAddItem }) {
  const [inputText, setInputText] = useState('');
  const [date, setDate] = useState('');
  const [textFieldIsHovered, setTextFieldIsHovered] = useState(false);
  const [dateFieldIsHovered, setDateFieldIsHovered] = useState(false);
  const [doneButtonIsHovered, setDoneButtonIsHovered] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDoneClick = () => {
    handleAddItem(inputText);
    setInputText('');
    setDate('');
  };

  const textFieldStyle = {
    width: '633px',
    height: '60px',
    backgroundColor: textFieldIsHovered ? '#EDDFCF' : '#CACACA',
    borderRadius: '10px',
    transition: 'background-color 0.15s', // Smooth transition for border color change
  };

  const dateFieldStyle = {
    width: '300px',
    height: '60px',
    borderRadius: '10px',
    backgroundColor: dateFieldIsHovered ? '#EDDFCF' : '#CACACA',
    transition: 'border-color 0.15s', // Smooth transition for border color change
  };

  const doneButtonStyle = {
    textTransform: 'none',
    // backgroundColor: '#F1B150',
    color: doneButtonIsHovered ? '#F1B150' : '#FFF1E1',
    fontFamily: 'Gaegu-Bold',
    width: '160px',
    height: '60px',
    fontSize: '35px',
    marginLeft: '473px',
    marginTop: '50px',
    borderRadius: '10px',
    border: doneButtonIsHovered ? '5px solid #F1B150' : 'none',
    backgroundColor: doneButtonIsHovered ? '#FFF1E1' : '#F1B150',
  };

  const dateInputProps = {
    style: {
      fontFamily: 'Gaegu',
      fontSize: '35px',
      color: '#394B6E',
      margin: '-10px',
      paddingLeft: '18px',
    },
  };

  const textInputProps = {
    style: {
      fontFamily: 'Gaegu-Bold',
      fontSize: '35px',
      color: '#394B6E',
      margin: '-10px',
      paddingLeft: '18px',
    },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          style={{ position: 'absolute', top: '20px', right: '20px' }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography style={boxTitle} id="modal-modal-title" variant="h6" component="h2">
          Add a new bucket list item.
        </Typography>
        <Typography style={promptStyle} id="modal-modal-description" sx={{ mt: 2 }}>
          What's the bucket list title?
        </Typography>
        <TextField
          style={textFieldStyle}
          variant="outlined"
          value={inputText}
          onChange={handleInputChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', // Remove the outline
              },
            },
          }}
          onMouseEnter={() => setTextFieldIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setTextFieldIsHovered(false)}
          InputProps={textInputProps}
        />
        <Typography style={promptStyle} id="modal-modal-description" sx={{ mt: 2 }}>
          Choose a date for this activity:
        </Typography>
        <TextField
          type="date"
          value={date}
          onChange={handleDateChange}
          variant="outlined"
          style={dateFieldStyle}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', // Remove the outline
              },
            },
          }}
          InputProps={dateInputProps}
          onMouseEnter={() => setDateFieldIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setDateFieldIsHovered(false)}
        />
        <Button
          variant="contained"
          color="primary"
          style={doneButtonStyle}
          onClick={handleDoneClick}
          disableElevation
          onMouseEnter={() => setDoneButtonIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setDoneButtonIsHovered(false)}
        >
          Done
        </Button>
      </Box>
    </Modal>
  );
}
