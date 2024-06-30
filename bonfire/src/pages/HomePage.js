import React, {useEffect, useState} from "react";
import Header from '../components/Header';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import Plank from "../components/Plank";
import CreateBonfireModal from '../components/CreateBonfireModal'

function HomePage() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const [bonfire, setBonfire] = useState([
			'bodacious baddies',
			'name2',
			'name3',
			'name4',
			'name5',
	])

	const handleNameChange = (name) => {
		setName(name);
	}

	const handleOpen = () => {
		setOpen(true);
		console.log('open');
	}
	const handleClose = () => setOpen(false);

	const handleCreateBonfire = () => {
		setBonfire([...bonfire, 'placeholder name'])
		// return bonfire
	}

	useEffect(() => {
		console.log(bonfire);
	}, [bonfire])

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
					<Carousel handleNameChange={handleNameChange} bonfire={bonfire}/>
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
			<AddBonfire onClick={handleOpen} ></AddBonfire>
			<CreateBonfireModal open={open} handleClose={handleClose} handleCreateBonfire={handleCreateBonfire}/>
		</>
	);
}

export default HomePage;