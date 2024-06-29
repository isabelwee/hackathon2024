import React from "react";
import plank from "../images/plank.png"
import { Typography } from "@mui/material";


export default function Plank(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <img src={plank} style={{
        m: 2
      }}></img>
      <Typography variant="h2" sx={{
        fontFamily: 'Gaegu-Bold',
        color: 'white',
        m: 2,
        position: 'absolute',
        top: '15px',
      }}>{props.name}</Typography>
      <Typography variant="h3" sx={{
        fontFamily: 'Gaegu',
        color: 'white',
        m: 2,
        position: 'absolute',
        top: '80px',
      }}>X days until ACTIVITY</Typography>
    </div>
  )
}