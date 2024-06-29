import React from "react";
import Header from '../components/Header';
import AddBonfire from "../components/AddBonfire";
import fire from "../images/fire.jpg"

function HomePage() {
    return (
        <>
        <Header/>
        <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column-reverse'
        }}
        >
            {/* <Header/> */}
            <div className="bonfire">

                <img src={fire}
                style={{
                    maxWidth: '400px',
                    margin: '50px',
                }}
                ></img>

            </div>
            <div style={{ position: 'relative'}}>aeojihbo</div>
        </div>
        
    </>
    );
}

export default HomePage