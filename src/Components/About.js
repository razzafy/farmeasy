import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center', color: 'white' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</Link></li>
        </ul>
      </nav>
      <div style={{ backgroundColor: '#004c00', padding: '20px 10px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>About FarmEasy</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px',fontWeight:'bold' }}>Empowering Farmers Through Innovation</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px", backgroundImage: "url('https://cdn.arstechnica.net/wp-content/uploads/2013/12/7881675668_4be9740def_b-640x426.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div style={{ padding: "20px", backgroundColor: "rgba(128, 128, 128, 0.8)", borderRadius: "10px", maxWidth: "600px" }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px',fontWeight:'bold',color:'black' }}>Agriculture lies at the heart of our existence, and at FarmEasy, we understand its importance like no other. With our cutting-edge machine learning algorithms, we're not just predicting crop yields, we're shaping the future of farming. 
            <p style={{ fontSize: '1.2rem', marginBottom: '20px',fontWeight:'bold',color:'black' }}></p>Join us in our mission to empower farmers, feed nations, and build a greener tomorrow.Agriculture lies at the heart of our existence, and at FarmEasy, we understand its importance like no other. With our cutting-edge machine learning algorithms, we're not just predicting crop yields, we're shaping the future of farming.</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px',fontWeight:'bold'}}>Join us in our mission to empower farmers, feed nations, and build a greener tomorrow!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
