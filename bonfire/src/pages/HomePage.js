import React from "react";
import Header from '../components/Header';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import plank from "../images/plank.png"

function HomePage() {
	return (
		<>
			<Header/>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					position: 'static',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Carousel/>
				{/* <img src={plank}></img> */}
			</div>
			
		</>
	);
}

export default HomePage;