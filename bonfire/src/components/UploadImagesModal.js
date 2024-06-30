import React from 'react';
import "../fonts/fonts.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { borderRadius } from '@mui/system';

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


export default function BucketListModal() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [textFieldIsHovered, setTextFieldIsHovered] = React.useState(false);
  const [dateFieldIsHovered, setDateFieldIsHovered] = React.useState(false);
  const [doneButtonIsHovered, setDoneButtonIsHovered] = React.useState(false);
  const [images, setImages] = React.useState([]);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setDoneButtonIsHovered(false)
  };

  const handleUploadClick = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setImages([...images, ...files]);
    }
  };

  const textFieldStyle = {
    width: '633px',
    height: '60px',
    backgroundColor: textFieldIsHovered ? '#EDDFCF' : '#CACACA',
    borderRadius: '10px',
    transition: 'background-color 0.15s', // Smooth transition for border color change
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
    marginTop: '50px',
    borderRadius: '10px',
    border: doneButtonIsHovered ? '5px solid #F1B150' : 'none',
    backgroundColor: doneButtonIsHovered ? '#FFF1E1' : '#F1B150',
  }
  

  const textInputProps = {
    style: {
      fontFamily: 'Gaegu-Bold',
      fontSize: '35px',
      color: '#394B6E',
      margin: '-10px',
      paddingLeft: '18px',
    }
  }

  const uploadButtonStyle = {
    display: 'none',
    fontFamily: 'More Sugar',
    color: '#7A5895'
  }

  return (
    <div>
      <Button style={buttonStyle} onClick={handleOpen}>Add new bucket list item!</Button>
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
            Recap your activity!
          </Typography>
          <Typography style={promptStyle} id="modal-modal-description" sx={{ mt: 2 }}>
            Write a caption:
          </Typography>
          <TextField 
            style={textFieldStyle} 
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', // Remove the outline
                },
              }
            }}
            onMouseEnter={() => setTextFieldIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setTextFieldIsHovered(false)}
            InputProps={textInputProps}
          />
          <Typography style={promptStyle} id="modal-modal-description" sx={{ mt: 2 }}>
            Add your memories:
          </Typography>
          <Box>
            <label htmlFor="upload-images">
              <Button 
                variant="contained" 
                color="primary" 
                component="span" 
                disableElevation
                sx={{
                  backgroundColor: '#394B6E', // Customize the background color
                  color: '#FFF1E1', // Customize the text color
                  '&:hover': {
                    backgroundColor: '#7A5895', // Customize the hover color
                  },
                  padding: '10px 20px', // Customize padding
                  borderRadius: '10px', // Customize border radius
                  fontFamily: 'More Sugar',
                  textTransform: 'none',
                  width: '100%',
                  height: '60px',
                  fontSize: '23px'
                }}
              >
                Upload Images
              </Button>
            </label>
            <input
              accept="image/*"
              id="upload-images"
              type="file"
              multiple
              onChange={handleUploadClick}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            style={doneButtonStyle}
            onClick={handleClose}
            disableElevation
            onMouseEnter={() => setDoneButtonIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setDoneButtonIsHovered(false)}
          >
            Done
          </Button>
        </Box>
      </Modal>
    </div>
  );
}