import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignUp from './pages/LoginSignUp';
import Login from './pages/Login';
import BucketList from './pages/BucketList';
import BucketMemories from './pages/BucketMemories';
import Profile from './pages/Profile';
import Layout from './components/Layout';

import Dummy from './pages/Dummy';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/bucket-memory" element={<BucketMemories />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/space" element={<HomePage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
