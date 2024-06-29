import React from "react";
import Header from '../components/Header';
import Background from '../components/Background';
import AddBonfire from "../components/AddBonfire";
import Carousel from "../components/Carousel";
import Bonfire from "../components/Bonfire";
function HomePage() {
    return (
        <>
        {/* <Background/> */}
        <Header/>
        <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}
        >
            {/* <Bonfire/> */}
            <Carousel/>
        </div>
        
    </>
    );
}

export default HomePage