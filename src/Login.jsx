import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
