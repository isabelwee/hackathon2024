import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import BucketListModal from "../components/BucketListModal";
import CreateBonfireModal from "../components/CreateBonfireModal";
import UploadImagesModal from "../components/UploadImagesModal"
import { Stack, Box, Checkbox, Button, IconButton } from '@mui/material';

import Typography from '@mui/material/Typography';

function LoginSignUp() {
  const [bucketListModalOpen, setBucketListModalOpen] = React.useState(false);

  const handleBucketListModalOpen = () => setBucketListModalOpen(true);
  const handleBucketListModalClose = () => setBucketListModalOpen(false);

  const typographyStyle = {
    textAlign: 'left',
    fontFamily: 'Gaegu',
    color: '#394B6E',
  };


  return (
      <div>
        <Typography variant="h4" sx={{...typographyStyle, cursor: 'pointer', '&:hover': {fontWeight: 'bold'}}} onClick={handleBucketListModalOpen}>+ Add new bucket list item!</Typography>
        <BucketListModal 
        open={bucketListModalOpen} 
        handleClose={handleBucketListModalClose} 
      />
        <CreateBonfireModal />
        <Typography variant="h4" sx={{...typographyStyle, cursor: 'pointer', '&:hover': {fontWeight: 'bold'}}} onClick={handleBucketListModalOpen}>Upload images</Typography>
        <UploadImagesModal />
      </div>

  );
}

export default LoginSignUp