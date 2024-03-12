import React, { useState } from 'react';

const Results = () => {
  const [prediction, setPrediction] = useState(null); // State to store prediction
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

  // Function to fetch prediction from Flask server
  const fetchPrediction =  () => {
    try {
      const response =  fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = response.json();
      setPrediction(data.prediction); // Set the prediction state with the received data
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><a className="active" href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/About" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</a></li>
        </ul>
      </nav>
      <div style={{ backgroundColor: '#004c00', padding: '20px', height: '100vh', textAlign: 'center', color: 'white' }}>
        <form onSubmit={(e) => { e.preventDefault(); fetchPrediction(); }}>
          <label>
            Year:
            <input type="text" name="Year" value={formData.Year} onChange={handleChange} />
          </label>
          <br />
          <label>
            Average Rainfall (mm per year):
            <input type="text" name="average_rain_fall_mm_per_year" value={formData.average_rain_fall_mm_per_year} onChange={handleChange} />
          </label>
          <br />
          <label>
            Pesticides Tonnes:
            <input type="text" name="pesticides_tonnes" value={formData.pesticides_tonnes} onChange={handleChange} />
          </label>
          <br />
          <label>
            Average Temperature:
            <input type="text" name="avg_temp" value={formData.avg_temp} onChange={handleChange} />
          </label>
          <br />
          <label>
            Area:
            <input type="text" name="Area" value={formData.Area} onChange={handleChange} />
          </label>
          <br />
          <label>
            Item:
            <input type="text" name="Item" value={formData.Item} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Get Prediction</button>
        </form>
        {prediction && <p>Prediction: {prediction}</p>} {/* Display prediction if available */}
      </div>
    </div>
  );
};

export default Results;





