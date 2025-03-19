import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '20px',
      fontFamily: 'Baskerville, serif'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link>
    </nav>
  );
}

export default Navigation; 