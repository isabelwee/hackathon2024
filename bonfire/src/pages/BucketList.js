import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Typography from '@mui/material/Typography';
import { Stack, Box, Checkbox, Button, IconButton } from '@mui/material';
import paper from '../images/paper.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import BucketListModal from '../components/BucketListModal';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon

function BucketList() {
  const [open, setOpen] = useState(false);

  // Initialize state with data from localStorage, if available
  const [bucketListItems, setBucketListItems] = useState(() => {
    const savedItems = localStorage.getItem('bucketListItems');
    return savedItems ? JSON.parse(savedItems) : [
      { text: 'Beach day!', date: '2024-07-01', checked: false },
      { text: 'Pottery class', date: '2024-07-02', checked: false },
      { text: 'Study date', date: '2024-07-03', checked: false },
    ];
  });

  // Update localStorage whenever bucketListItems changes
  useEffect(() => {
    localStorage.setItem('bucketListItems', JSON.stringify(bucketListItems));
  }, [bucketListItems]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddItem = (itemText, itemDate) => {
    setBucketListItems([...bucketListItems, { text: itemText, date: itemDate, checked: false }]);
    handleClose();
  };

  const handleCheckboxChange = (index) => (event) => {
    const newBucketListItems = [...bucketListItems];
    newBucketListItems[index].checked = event.target.checked;
    setBucketListItems(newBucketListItems);
  };

  const handleDeleteItem = (index) => () => {
    const newBucketListItems = bucketListItems.filter((_, i) => i !== index);
    setBucketListItems(newBucketListItems);
  };

  const handleClearAll = () => {
    localStorage.removeItem('bucketListItems');
    setBucketListItems([]);
  };

  const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  // Full height of the viewport
    margin: 0,
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundImage: `url(${paper})`,
    backgroundSize: 'cover',
    padding: '100px',
    boxSizing: 'border-box',
    textAlign: 'left',
    borderRadius: '8px',
    width: '60vw',  // Adjust the width as needed
    maxWidth: '90vw',  // Adjust the max width as needed
    maxHeight: '80vh',  // Adjust the max height as needed
  };

  const typographyStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#394B6E',
  };

  const checkboxStyle = {
    '& .MuiSvgIcon-root': { fontSize: 30 },  // Increase the size of the checkbox icon
    color: '#394B6E',  // Set the checkbox color
    '&.Mui-checked': {
      color: '#F1B150',  // Set the checkbox color when checked
    },
    '&.Mui-disabled': {
      color: 'grey', opacity: 0.5,
    },
  };

  const buttonStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    fontFamily: 'Gaegu',
    textTransform: 'none',
    fontSize: '28px',
    color: '#394B6E'
  };

  return (
    <div style={bodyStyle}>
      <Header />
      <Box sx={containerStyle}>
        <Button
          sx={buttonStyle}
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          size="medium"
          component={Link} to="/bucket-memory"
        >
          Memories
        </Button>

        <Stack spacing={2}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              textAlign: 'left',
              fontFamily: 'More Sugar',
              color: '#F1B150',
            }}
          >
            Blah's Bucket List
          </Typography>

          <Stack spacing={2}>
            {bucketListItems.map((item, index) => (
              <Stack key={index} direction="row" alignItems="center" spacing={1}>
                <Checkbox
                  sx={checkboxStyle}
                  size="large"
                  checked={item.checked}
                  onChange={handleCheckboxChange(index)}
                />
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="h4" sx={typographyStyle}>{item.text}</Typography>
                  {item.date && (
                    <Typography variant="body1" sx={{ fontFamily: 'Gaegu', color: '#394B6E' }}>{item.date}</Typography>
                  )}
                </Stack>
                <IconButton
                  aria-label="delete"
                  onClick={handleDeleteItem(index)}
                  sx={{ marginLeft: 'auto' }}
                >
                  <DeleteIcon color="black" />
                </IconButton>
              </Stack>
            ))}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h4" sx={{...typographyStyle, cursor: 'pointer', '&:hover': {fontWeight: 'bold'}}} onClick={handleOpen}>
                + Add new bucket list item!
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <BucketListModal open={open} handleClose={handleClose} handleAddItem={handleAddItem} />
    </div>
  );
}

export default BucketList;
