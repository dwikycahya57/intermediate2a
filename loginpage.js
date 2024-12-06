import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/homepage');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button onClick={handleLogin} className="login-button">Login</button>
        <p>Belum punya akun? <button onClick={goToRegister} className="register-link">Daftar di sini</button></p>
      </div>
    </div>
  );
}

export default LoginPage;
