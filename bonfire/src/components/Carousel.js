import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import Bonfire from './Bonfire';
import { Button, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Carousel() {


  return (
		<>
			<button className='left-button'>LEFT</button>
			<Swiper
				effect='coverflow'
				slidesPerView='3'
				grabCursor='true'
				loop='true'
				loopAddBlankSlides='true'
				// centerInsufficientSlides='true'
				centeredSlides='true'
				coverflowEffect={{
					rotate: 0,
					scale: 1,
					stretch: -20,
					depth: 150,
					modifier: 3,
					slideShadows: false
				}}
				style={{
					width: '80%'
				}}
				navigation={{
					nextEl: '.right-button',
					prevEl: '.left-button'
				}}
				modules={[EffectCoverflow, Navigation]}
			>
				<SwiperSlide>
					<Bonfire></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire></Bonfire>
				</SwiperSlide>

			</Swiper>
			<IconButton className='right-button'
			>
				<ChevronRightIcon fontSize='large' sx={{ width: '100px'}}/>
			</IconButton>
		</>
  );
}

export default Carousel;
