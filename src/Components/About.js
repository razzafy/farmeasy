import React from 'react';
//import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><a class="active" href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/About" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</a></li>
        </ul>
      </nav>
      <div style={{ backgroundColor: '#004c00', padding: '200px',height: '100vh', textAlign: 'center', color: 'white' }}>
        <p>hii this is ananyaaa</p>
      </div>
    </div>
  );
};

export default About;