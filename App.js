import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './components/loginpage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <Routes>
      {/* Rute default mengarah ke halaman login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
