import React, { useState } from 'react'
import './css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to log in');
      console.error(err);
    }
  }

  return (
    <div className="signup">
    <div className="signup-content">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className='signup-input'>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

      </form>
      <div className="auth-footer">
              Already have an account? <Link to="/signup" className='span'>Sign up</Link>
            </div>
            <div className='signup-policy'></div>
    </div>
    </div>
  );
}

export default Login




  
  