import React from "react";
import IconButton from "@mui/material/IconButton";
import newFire from '../images/addBonfireButton.png'

export default function AddBonfire(props) {

  return (
    <div>

      <IconButton 
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: 9999,
          m: 3,
          cursor: 'pointer',
        }}
      onClick={props.onClick}
      variant='contained'
      >
        <img src={newFire}/>
      </IconButton>
    </div>

  );
}
