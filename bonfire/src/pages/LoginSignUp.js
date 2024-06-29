import React from "react";
import '../App.css';

function LoginSignUp() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const titleStyle = {
    fontFamily: 'MoreSugar, Arial, sans-serif',
    fontSize: '70px',
    fontWeight: 'bold',
    color: '#F1B150',
  };

  return (
      < div style={containerStyle}>
        <div className="bonfire-title" style={titleStyle}>bonfire</div>
      </div>

  );
}

export default LoginSignUp