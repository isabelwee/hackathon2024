import React from 'react';
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

const boxTitle = {
  fontFamily: 'More Sugar',
  fontSize: '40px',
};

const promptStyle = {
  fontFamily: 'Gaegu',
  fontSize: '35px',
};

export default function UploadPhotoModal({ open, handleClose, selectedItem }) {
  const [textFieldIsHovered, setTextFieldIsHovered] = React.useState(false);
  const [doneButtonIsHovered, setDoneButtonIsHovered] = React.useState(false);
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setPhotoUrl('');  // Clear the photo URL
    setFileName('');  // Clear the file name
    handleClose();
  };

  const handleDrop = (event) => {
    event.preventDefault();  // Prevent the default action
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();  // Prevent default drag behavior
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box 
        sx={style}
        onDrop={handleDrop}  // Add the onDrop handler
        onDragOver={handleDragOver}  // Add the onDragOver handler
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={boxTitle} variant="h2">Upload a photo for the bucket list item</Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography sx={promptStyle} variant="h3">Selected Item: {selectedItem?.text}</Typography>
        <Box mt={2}>
          <TextField
            type="file"
            onChange={handleFileUpload}
            variant="outlined"
            fullWidth
          />
          {/* Remove the img element to stop showing the photo */}
        </Box>
        <Button
          variant="contained"
          onClick={handleCloseModal}
          onMouseEnter={() => setDoneButtonIsHovered(true)}
          onMouseLeave={() => setDoneButtonIsHovered(false)}
          sx={{
            mt: 3,
            fontFamily: 'More Sugar',
            fontSize: '24px',
            color: '#FFF',
            backgroundColor: doneButtonIsHovered ? '#F1B150' : '#F7D18C',
            '&:hover': {
              backgroundColor: '#F1B150',
            },
          }}
        >
          Done
        </Button>
      </Box>
    </Modal>
  );
}
