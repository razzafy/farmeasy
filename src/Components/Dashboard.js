import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{backgroundColor: '#004c00', minHeight: '100vh' }}>
    <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center', color: 'white' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</Link></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</Link></li>
        <li style={{ display: 'inline', marginRight: '2px'}}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Logout</Link></li>
      </ul>
    </nav>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      <div className="card" style={{ width: '18rem', cursor: 'pointer' }}>
        <div className="card-body">
          <h4 className="card-title">Crop Recommendation</h4>
          <p className="card-text">Get personalized crop planting advice.</p>
          <Link to="/recommend" className="btn btn-primary">Go</Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', cursor: 'pointer' }}>
        <div className="card-body">
          <h4 className="card-title">Yield Prediction</h4>
          <p className="card-text">Estimate your crop yield based on various factors.</p>
          <Link to="/results" className="btn btn-primary">Go</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
