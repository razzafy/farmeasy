import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Recommendation() {
  // Initialize state for the recommendation and form data
  const [recommendation, setRecommendation] = useState(null);
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    ph: '',
    rainfall: ''
  });

  // Function to handle form data changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to fetch recommendation from your backend
  const fetchRecommendation = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          N: formData.N,
          P: formData.P,
          K: formData.K,
          ph: formData.ph,
          rainfall: formData.rainfall,
          state: formData.state,
          city: formData.city
        }),
      });
      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // JSX for the component
  return (
    <div style={{ backgroundColor: '#004c00', minHeight: '100vh' }}>
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
          <form style={{ padding: '2px 20px' }} onSubmit={(e) => { e.preventDefault(); fetchRecommendation(); }}>
          <p>Find out the most suitable crop for your farm by entering the details below:</p>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Nitrogen content
              <input type="text" name="N" value={formData.N} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Phosphorous content
              <input type="text" name="P" value={formData.P} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Potassium content
              <input type="text" name="K" value={formData.K} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              PH of soil
              <input type="text" name="ph" value={formData.ph} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Average Rainfall
              <input type="text" name="rainfall" value={formData.rainfall} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
             City
              <input type="text" name="city" value={formData.city} onChange={handleChange} style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </label>
            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007f00', color: 'white' }}>Get Recommendation</button>
          </form>
          {recommendation && <p style={{ marginTop: '20px' }}>You should grow the crop : {recommendation}</p>}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;  
