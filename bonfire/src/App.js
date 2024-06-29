import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignUp from './pages/LoginSignUp';
import BucketList from './pages/BucketList';
import BucketMemories from './pages/BucketMemories';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/bucketList" element={<BucketList />} />
          <Route path="/bucket-memory" element={<BucketMemories />} />
          {/* <Route path="/space" element={<HomePage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
