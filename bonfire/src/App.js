import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignUp from './pages/LoginSignUp';


function App() {
  return (
    <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/space" element={<HomePage />} />  */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
