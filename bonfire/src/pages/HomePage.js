import React, {useEffect, useState} from "react";
import Header from '../components/Header';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import Plank from "../components/Plank";

function HomePage() {
	const [name, setName] = useState('');

	const handleNameChange = (name) => {
		setName(name);
	}
	


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
						marginTop: '100px',
						position: 'static',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Carousel handleNameChange={handleNameChange}/>
				</div>
					<div
						style={{
							position: 'relative',
							bottom: 0
						}}
					>
						<Plank name={name}/>
					</div>
			</div>
			
		</>
	);
}

export default HomePage;