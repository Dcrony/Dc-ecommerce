import React, { useState, FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/Login.css';

const Signup = () => {
  const [name, setName] = useState<string>(''); // Added missing name state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false); // Added terms checkbox state
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (!agreeToTerms) {
      return setError('You must agree to the terms and conditions');
    }

    try {
      setError('');
      setLoading(true);
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. ' + (err instanceof Error ? err.message : ''));
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='signup'>
      <div className="signup-content">
        <h2>Register</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className='signup-input'>
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} // Fixed to use setName
            required
          />
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
            minLength={6}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className='signup-policy'>
            <input 
              type="checkbox" 
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
            />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link to="/login" className='span'>Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;