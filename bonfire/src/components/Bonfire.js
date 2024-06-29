import React from "react";
import fire from "../images/bonfire.png"


export default function Bonfire (props) {
    return (
        <img src={fire}
            style={{
                // maxWidth: props.size,
                width: '100%',
                // margin: '20px'
                objectFit: 'cover'
            }}
            alt="bonfire image"
        ></img>
    );
};