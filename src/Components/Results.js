import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Results = () => {
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState({
    Year: '',
    average_rain_fall_mm_per_year: '',
    pesticides_tonnes: '',
    avg_temp: '',
    Area: '',
    Item: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchPrediction = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(); // Parse response body as JSON
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
  
    <div style={{ backgroundColor: '#007f00', minHeight: '100vh' }}>
       <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</Link></li>
        </ul>
      </nav>
  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <form style={{padding:'20 px 30 px'}} onSubmit={(e) => { e.preventDefault(); fetchPrediction(); }}>
        <label >
          Year:
          <input type="text" name="Year" value={formData.Year} onChange={handleChange} 
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Average Rainfall (mm per year):
          <input type="text" name="average_rain_fall_mm_per_year" value={formData.average_rain_fall_mm_per_year} onChange={handleChange}
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Pesticides Tonnes:
          <input type="text" name="pesticides_tonnes" value={formData.pesticides_tonnes} onChange={handleChange}
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Average Temperature:
          <input type="text" name="avg_temp" value={formData.avg_temp} onChange={handleChange}
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Area:
          <input type="text" name="Area" value={formData.Area} onChange={handleChange}
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Item:
          <input type="text" name="Item" value={formData.Item} onChange={handleChange}
          style={{ width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Get Prediction</button>
      </form>
      {prediction && <p >Prediction: {prediction}</p>}
      </div>
      </div>
      </div>
  );
};

export default Results;
