import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Daftar</h2>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />
        <button className="register-button">Daftar</button>
        <p>Sudah punya akun? <button onClick={goToLogin} className="login-link">Login di sini</button></p>
      </div>
    </div>
  );
}

export default RegisterPage;
