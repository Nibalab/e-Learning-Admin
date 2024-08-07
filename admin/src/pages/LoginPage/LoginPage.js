import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../store/slices/authSlice';
import axios from '../../utils/axios';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', {
        username,
        password,
      });

      dispatch(loginAction(response.data.token)); 
      setMessage('Login successful!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
