import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#2c3e50',
        marginBottom: '1rem'
      }}>
        Welcome to Home Page
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#7f8c8d',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        This application demonstrates authentication-based routing in React.
        Some pages are protected and require login to access.
      </p>
      
      <div style={{
        backgroundColor: '#ecf0f1',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ color: '#34495e', marginBottom: '1rem' }}>
          Test Credentials:
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          <strong>Email:</strong> admin@gmail.com<br />
          <strong>Password:</strong> admin@123
        </p>
      </div>
      
      <Link to="/login" style={{
        backgroundColor: '#3498db',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        display: 'inline-block',
        transition: 'all 0.3s'
      }}>
        Go to Login →
      </Link>
    </div>
  );
};

export default Home;
