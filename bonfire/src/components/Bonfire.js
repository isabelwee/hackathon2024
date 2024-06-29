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
			<img src={fire}
				style={{
					minWidth: '400px',
					width: '100%',
					objectFit: 'cover'
				}}
				alt="bonfire image"
			></img>
		</div>
	);
};