import React, { useState } from 'react';

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
    <div style={{ backgroundColor: '#004c00', padding: '20px', height: '100vh', textAlign: 'center', color: 'white' }}>
      <form onSubmit={(e) => { e.preventDefault(); fetchPrediction(); }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Year:
          <input type="text" name="Year" value={formData.Year} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Average Rainfall (mm per year):
          <input type="text" name="average_rain_fall_mm_per_year" value={formData.average_rain_fall_mm_per_year} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Pesticides Tonnes:
          <input type="text" name="pesticides_tonnes" value={formData.pesticides_tonnes} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Average Temperature:
          <input type="text" name="avg_temp" value={formData.avg_temp} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Area:
          <input type="text" name="Area" value={formData.Area} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Item:
          <input type="text" name="Item" value={formData.Item} onChange={handleChange} />
        </label>
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Get Prediction</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default Results;
