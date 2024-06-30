import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import Bonfire from './Bonfire';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

function Carousel({ handleNameChange, bonfire }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    handleNameChange(bonfire[index]);
  }, [index, bonfire, handleNameChange]);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };

  const handleBucketList = () => {
    navigate('/bucket-list');
  };

  return (
    <div className='Carousel-container'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div>
        <IconButton className='left-button' sx={{
          m: 2, ml: 5, color: 'white'
        }}>
          <ChevronLeftIcon sx={{ fontSize: '4em' }} />
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '70vw'
        }}
      >
        <Swiper
          effect='coverflow'
          slidesPerView={3}
          grabCursor={false}
          onSlideChange={handleSlideChange}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            scale: 1,
            stretch: -50,
            depth: 150,
            modifier: 4,
            slideShadows: false
          }}
          navigation={{
            nextEl: '.right-button',
            prevEl: '.left-button'
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {bonfire.map((name, index) => (
            <SwiperSlide key={index} onClick={handleBucketList}>
              <Bonfire name={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <IconButton className='right-button' sx={{
          m: 2, mr: 5, color: 'white'
        }}>
          <ChevronRightIcon sx={{ fontSize: '4em' }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Carousel;
