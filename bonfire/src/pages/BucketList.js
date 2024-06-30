import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Typography from '@mui/material/Typography';
import { Stack, Box, Checkbox, Button, IconButton } from '@mui/material';
import paper from '../images/paper.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import BucketListModal from '../components/BucketListModal';
import UploadImagesModal from '../components/UploadImagesModal';
import DeleteIcon from '@mui/icons-material/Delete';

function BucketList() {
  const [bucketListModalOpen, setBucketListModalOpen] = useState(false);
  const [uploadPhotoModalOpen, setUploadPhotoModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

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

  const handleBucketListModalOpen = () => setBucketListModalOpen(true);
  const handleBucketListModalClose = () => setBucketListModalOpen(false);

  const handleUploadPhotoOpen = () => setUploadPhotoModalOpen(true);
  const handleUploadPhotoClose = () => setUploadPhotoModalOpen(false);

  const handleAddItem = (itemText, itemDate) => {
    setBucketListItems([...bucketListItems, { text: itemText, date: itemDate, checked: false }]);
    handleBucketListModalClose();
  };

  const handleCheckboxChange = (index) => (event) => {
    const newBucketListItems = [...bucketListItems];
    newBucketListItems[index].checked = event.target.checked;
    setBucketListItems(newBucketListItems);
    
    if (event.target.checked) {
      setSelectedItem(newBucketListItems[index]);  // Set the selected item
      handleUploadPhotoOpen();
    }
  };

  const handleDeleteItem = (index) => () => {
    const newBucketListItems = bucketListItems.filter((_, i) => i !== index);
    setBucketListItems(newBucketListItems);
  };



  const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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
    width: '60vw',
    maxWidth: '90vw',
    maxHeight: '80vh',
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
            Mermaids' Bucket List
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
                  <Typography variant="h4" sx={typographyStyle} onClick={handleUploadPhotoOpen}>{item.text}</Typography>
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
              <Typography variant="h4" sx={{...typographyStyle, cursor: 'pointer', '&:hover': { fontWeight: 'bold'}}} onClick={handleBucketListModalOpen}>+ Add new bucket list item!</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <BucketListModal 
        open={bucketListModalOpen} 
        handleClose={handleBucketListModalClose} 
        handleAddItem={handleAddItem} 
      />
      <UploadImagesModal 
        open={uploadPhotoModalOpen} 
        handleClose={handleUploadPhotoClose} 
      />
    </div>
  );
}

export default BucketList;
