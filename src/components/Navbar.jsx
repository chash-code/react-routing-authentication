import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  // Check login status on component mount and when storage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    
    checkLoginStatus();
    
    // Listen for storage changes (when user logs in/out)
    window.addEventListener('storage', checkLoginStatus);
    
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);
  
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // Redirect to login page
    navigate('/login');
  };
  
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          AuthApp
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavLink 
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#3498db' : 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Home
          </NavLink>
          
          {isLoggedIn && (
            <NavLink 
              to="/todos"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Todos
            </NavLink>
          )}
          
          {!isLoggedIn ? (
            <NavLink 
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
