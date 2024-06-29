import React from 'react';
import Header from '../components/Header';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import paper from '../images/paper.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import mkg from '../images/memories/marketing-directors.jpg';
import hike from '../images/memories/hike.jpg';
import malatang from '../images/memories/malatang.jpg';
import amber from '../images/memories/birth.jpg';
import sza from '../images/memories/sza.jpg';
import matildas from '../images/memories/matildas.jpg';
import hack from '../images/memories/hack.jpg';
import sushi from '../images/memories/sushi.jpg';
import beach from '../images/memories/beach.jpg';

const itemData = [
  {
    img: mkg,
    title: 'Christmas Meet-Up!!!',
    date: 'December 25th',
  },
  {
    img: hike,
    title: 'Hiking with Paris',
    date: 'January 15th',
  },
  {
    img: amber,
    title: 'Amber\'s Birthday!',
    date: 'February 23rd',
  },
  {
    img: matildas,
    title: 'Tillies game',
    date: 'March 6th',
  },
  {
    img: sushi,
    title: 'Sushi E',
    date: 'April 12th',
  },
  {
    img: malatang,
    title: 'Malatang (again)',
    date: 'May 14th',
  },
  {
    img: hack,
    title: '12am @ Uni for Hackathon',
    date: 'June 29th',
  },
  {
    img: sza,
    title: 'SZA Concert',
    date: 'July 2nd',
  },
  {
    img: beach,
    title: 'Coogee Beach',
    date: 'August 5th',
  },
];

function BucketMemories() {
  const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
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
    width: '70vw', // was 60vw
    maxWidth: '90vw',
    maxHeight: '74vh'
  };

  const titleStyle = {
    textAlign: 'left',
    fontFamily: 'More Sugar',
    fontSize: '20px',
    color: '#394B6E',
  };

  const dateStyle = {
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Gaegu',
    fontSize: '15px',
    color: '#394B6E',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '16px',
    left: '16px',
    fontFamily: 'Gaegu',
    textTransform: 'none',
    fontSize: '28px',
    color: '#394B6E',
  };

  return (
    <div style={bodyStyle}>
      <Header />
      <Box sx={containerStyle}>
        <Button
          sx={buttonStyle}
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          size="medium"
          component={Link}
          to="/bucket-list"
        >
          List
        </Button>
        <Typography
          variant="h3"
          component="div"
          sx={{
            textAlign: 'left',
            fontFamily: 'More Sugar',
            color: '#F1B150',
            marginBottom: '2px'
          }}
        >
          Blah's Bonfire Memories
        </Typography>

        <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight="auto">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={<Typography sx={titleStyle}>{item.title}</Typography>}
                subtitle={<Typography sx={dateStyle}>{item.date}</Typography>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default BucketMemories;
