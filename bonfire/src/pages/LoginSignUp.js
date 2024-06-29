import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import LoginButton from "../components/LoginButton";
import LoginCard from "../components/LoginCard";
import SignUpButton from "../components/SignUpButton"

function LoginSignUp() {
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
        <div className="bonfire-title" style={titleStyle}>
          bonfire
        </div>
        <LoginButton />
        <SignUpButton />
      </div>

  );
}

export default LoginSignUp