import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RandomText = ({ backgroundColor }) => {
  const textOptions = [
    "Grow Smarter, Not Harder!🌾",
    "Unlocking Nature's Secrets, One Crop at a Time!🌿",
    "Empowering Farmers with Data-driven Harvests!📊",
    "Harvesting Insights for a Sustainable Future!🌱",
    "From Fields to Futures: Revolutionizing Farming!🚜",
    "Crop Predictions Made Simple, Just a Click Away!🌾",
    "Farming Goes Digital: Your Yield Ally!💻",
    "Bridging Tradition with Technology for Bountiful Harvests!🌾",
    "Planting Seeds of Precision Agriculture! 🌱",
    "Farming Forward with Predictive Power! 🔮",
  ];

  const [randomText] = useState(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    return textOptions[randomIndex];
  });

  return (
    <div
      className="random-text-container"
      style={{
        backgroundColor: backgroundColor || 'rgba(128, 128, 128, 0.7)', 
        padding: "20px",
        color: "black",
        textAlign: "center",
        borderRadius: "30px",
        fontSize:"30px"
      }}
    >
      <p>{randomText}</p>
    </div>
  );
};

function Home() {
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
      <div style={{ backgroundColor: '#004c00', padding: '10px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to FarmEasy</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Predicting Tomorrow's Harvest, Today! 🌱</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px", backgroundImage: "url('https://cdn.arstechnica.net/wp-content/uploads/2013/12/7881675668_4be9740def_b-640x426.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <RandomText backgroundColor="rgba(128, 128, 128, 0.7)" />
        </div>
        <div style={{ padding: "20px" }}>
          <h2>Why Choose FarmEasy?</h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Crop yield prediction has never been easier. With our intuitive user interface, farmers can effortlessly navigate through vital information and plan their harvests with confidence. Say goodbye to uncertainties and hello to a new era of farming simplicity with FarmEasy.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
