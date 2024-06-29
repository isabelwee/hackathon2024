import React from "react";
import Header from '../components/Header';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import Plank from "../components/Plank";

function HomePage() {
	return (
		<>
			<Header/>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<div
					style={{
						position: 'static',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Carousel/>
				</div>
					<div
						style={{
							position: 'relative',
							bottom: 0
						}}
					>

						<Plank name='Bodacious baddies'/>
					</div>
			</div>
			
		</>
	);
}

export default HomePage;