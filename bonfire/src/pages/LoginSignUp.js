import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import LoginButton from "../components/LoginButton";
import SignUpButton from "../components/SignUpButton"
import background from "../images/background-no-mountains.png"

function LoginSignUp() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${background})`,
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