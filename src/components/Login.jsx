import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Valid credentials
  const VALID_EMAIL = 'admin@gmail.com';
  const VALID_PASSWORD = 'admin@123';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate credentials
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Store authentication state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to todos page
      navigate('/todos');
    } else {
      // Show error message
      setError('Invalid email or password');
    }
  };
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginTop: '2rem',
      maxWidth: '500px',
      margin: '2rem auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Login
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#555',
            fontWeight: 'bold'
          }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '2px solid #ddd',
              borderRadius: '5px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#555',
            fontWeight: 'bold'
          }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '2px solid #ddd',
              borderRadius: '5px'
            }}
          />
        </div>
        
        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#c33',
            padding: '12px',
            borderRadius: '5px',
            marginBottom: '1.5rem',
            textAlign: 'center',
            border: '1px solid #fcc'
          }}>
            {error}
          </div>
        )}
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '1.1rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
        >
          Login
        </button>
      </form>
      
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          <strong>Test Credentials:</strong><br />
          Email: admin@gmail.com<br />
          Password: admin@123
        </p>
      </div>
    </div>
  );
};

export default Login;
