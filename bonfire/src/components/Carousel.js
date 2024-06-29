import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import Bonfire from './Bonfire';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';


function Carousel({handleNameChange}) {
	const navigate = useNavigate();
	const bonfires = [
		'bodacious baddies',
		'name2',
		'name3',
		'name4',
		'name5',
	]
	const [index, setIndex] = useState(0);

	useEffect(() => {
		handleNameChange(bonfires[index]);
	}, [index])
	
	const handleSlideChange = (swiper) => {
		setIndex(swiper.activeIndex)
	}

	const handleBucketList = () => {
		navigate('/bucket-list');
	}

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
				grabCursor={false}
				onSlideChange={handleSlideChange}
				centerInsufficientSlides='true'
				centeredSlides='true'
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
				<SwiperSlide onClick={handleBucketList} >
					<Bonfire name='god'></Bonfire>
				</SwiperSlide>
				<SwiperSlide onClick={handleBucketList} >
					<Bonfire name='has'></Bonfire>
				</SwiperSlide>
				<SwiperSlide onClick={handleBucketList} >
					<Bonfire name='said'></Bonfire>
				</SwiperSlide>
				<SwiperSlide onClick={handleBucketList} >
					<Bonfire name='hoes mad'></Bonfire>
				</SwiperSlide>
				<SwiperSlide onClick={handleBucketList} >
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
