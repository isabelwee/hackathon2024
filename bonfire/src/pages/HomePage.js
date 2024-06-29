import React from "react";
import Header from '../components/Header';
import Background from '../components/Background';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import Bonfire from "../components/Bonfire";
function HomePage() {
	return (
		<>
			<Header/>
			<div
				style={{
					height: '100vh',
					position: 'static',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Carousel/>
			</div>
			
		</>
	);
}

export default HomePage;