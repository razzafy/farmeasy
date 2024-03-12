import React, { useState } from 'react';

const WeatherData = ({ onSubmit }) => {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ temperature, humidity, ph, rainfall });
  };

  return (
    <div>
      <h2>Enter Weather Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Temperature (°C):
          <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
        </label>
        <label>
          Humidity (%):
          <input type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} />
        </label>
        <label>
          pH:
          <input type="number" step="0.1" value={ph} onChange={(e) => setPh(e.target.value)} />
        </label>
        <label>
          Rainfall (mm):
          <input type="number" value={rainfall} onChange={(e) => setRainfall(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WeatherData;
