import React from "react";
import '../App.css';
import "../fonts/fonts.css";
import LoginButton from "../components/LoginButton";

function LoginSignUp() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const titleStyle = {
    fontFamily: 'More Sugar',
    fontSize: '70px',
    fontWeight: 'bold',
    color: '#F1B150',
  };

  return (
      < div style={containerStyle}>
        <div className="bonfire-title" style={titleStyle}>
          bonfire
        </div>
        <LoginButton />
      </div>

  );
}

export default LoginSignUp