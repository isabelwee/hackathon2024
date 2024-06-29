import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import LogOutButton from "../components/LogOutButton";
import ProfileCard from "../components/ProfileCard";
import Header from '../components/Header';

function Profile() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
  };

  const titleStyle = {
    fontFamily: 'More Sugar',
    fontSize: '100px',
    fontWeight: 'bold',
    color: '#F1B150',
  };

  return (
      < div style={containerStyle}>
        {/* <div className="bonfire-title" style={titleStyle}>
          bonfire
        </div> */}
        <Header />
        <ProfileCard/>
        <br></br>
        <LogOutButton/>
        </div>

  );
}

export default Profile