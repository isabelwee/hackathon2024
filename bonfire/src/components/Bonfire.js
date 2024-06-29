import React from "react";
import fire from "../images/bonfire.png"
import { Typography } from "@mui/material";


export default function Bonfire (props) {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column'
		}}>
			<Typography variant="h4" sx={{
				fontFamily: 'Gaegu',
				color: 'white',
				m: 2
			}}>{props.name}</Typography>
			<img src={fire}
				style={{
					width: '100%',
					objectFit: 'cover'
				}}
				alt="bonfire image"
			></img>
		</div>
	);
};