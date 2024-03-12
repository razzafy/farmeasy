import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import RandomText from './RandomText';
export { RandomText };
function Home()
{
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
   const RandomText = () => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const initialRandomText = textOptions[randomIndex];
    const [randomText] = useState(initialRandomText);

    return (
      <div
        className="quotes"
        style={{ padding: "85px 40px", fontSize: "30px", fontStyle: "italic", fontWeight: "bold" }}
      >
        <p>{randomText}</p>
      </div>
    );
  };
  

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
      <div style={{ backgroundColor: '#004c00', padding: '10px',height: '100vh', textAlign: 'center', color: 'white' }}>
        <h1>Welcome to FARM EASY</h1>
        <p>Predicting Tomorrow's Harvest, Today! 🌱</p>
        <div style={{ display: "flex" }}>
          <center>
          <RandomText />
          <div className="row justify-content-end" style={{ padding: "100px 100px" }}>
            <div
              className="card col-sm-4 bg-l rounded formu"
              style={{ height: "30px", textAlign:'center' }}
            >
            </div>
          </div>
          </center>
       </div>
      </div>
    </div>
  );
}

export default Home;