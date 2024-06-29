import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import Bonfire from './Bonfire';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Carousel() {


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
					<ChevronLeftIcon sx={{ fontSize: '4em'}} />
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
				slidesPerView='3'
				grabCursor='true'
				// loop='true'
				// loopAddBlankSlides='true'
				centerInsufficientSlides='true'
				centeredSlides='true'
				coverflowEffect={{
					rotate: 0,
					scale: 1,
					stretch: -20,
					depth: 150,
					modifier: 3,
					slideShadows: false
				}}
				navigation={{
					nextEl: '.right-button',
					prevEl: '.left-button'
				}}
				modules={[EffectCoverflow, Navigation]}
			>
				<SwiperSlide>
					<Bonfire name='god'></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire name='has'></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire name='said'></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire name='hoes mad'></Bonfire>
				</SwiperSlide>
				<SwiperSlide>
					<Bonfire name='ya yeet'></Bonfire>
				</SwiperSlide>

			</Swiper>
			</div>
			
			<div>
			<IconButton className='right-button' sx={{
				m: 2, mr: 5, color: 'white'
			}}>
  			<ChevronRightIcon sx={{ fontSize: '4em'}}/>
			</IconButton>
			</div> 
		</div> 
  );
}

export default Carousel;
