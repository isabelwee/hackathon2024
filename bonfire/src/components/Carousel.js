import React from 'react';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Bonfire from './Bonfire';

function Carousel() {
	const [slides, setSlides] = [];

	const slide = {
		
	}

  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

  const handleRightClick = () => {
    setRight(!right);
  };
  const handleLeftClick = () => {
    setLeft(!left);
  };

  return (
    <div>
      <Button onClick={handleLeftClick} variant="outlined">
        left
      </Button>
      <Slide direction="left" in={left} mountOnEnter unmountOnExit>
        <div >
          <Bonfire/>
        </div>
      </Slide>
      <Slide direction="right" in={right} mountOnEnter unmountOnExit>
        <div >
          <Bonfire/>
        </div>
      </Slide>
      <Button onClick={handleRightClick} variant="outlined">
        right
      </Button>
    </div>
  );
}

export default Carousel;
