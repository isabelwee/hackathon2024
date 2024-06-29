import React from 'react';
import Header from '../components/Header';

function BucketList() {
  // Inline styles for the container and content
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    background: 'transparent',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div>
        <h1>Your Bucket List</h1>
        <p>Welcome to your bucket list page. Here you can add and manage your goals and dreams!</p>
        {/* Add more content or components as needed */}
      </div>
    </div>
  );
}

export default BucketList;
