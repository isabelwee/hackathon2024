import React from 'react';
import "../fonts/fonts.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius, color, fontFamily, fontSize, padding, textTransform } from '@mui/system';

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

export default function BucketListModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle = {
    textTransform: 'none',
    fontFamily: 'Gaegu',
    color: '#394B6E'
  }

  const boxTitle = {
    fontFamily: 'More Sugar',
    fontSize: '40px',
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
          <Typography style={boxTitle} id="modal-modal-title" variant="h6" component="h2">
            Add a new bucket list item.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}