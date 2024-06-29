import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignUp from './pages/LoginSignUp';
import Login from './pages/Login';
import BucketList from './pages/BucketList';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bucketList" element={<BucketList />} />
          {/* <Route path="/space" element={<HomePage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
