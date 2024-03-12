import React, { useState } from 'react';

const SelectCrop = ({ onSubmit }) => {
  const [crop, setCrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(crop);
  };

  return (
    <div>
      <h2>Select Crop</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Choose the crop:
          <select value={crop} onChange={(e) => setCrop(e.target.value)}>
            <option value="">Select</option>
            <option value="Barley">Barley</option>
            <option value="Millets">Millets</option>
            <option value="Ragi">Ragi</option>
            <option value="Wheat">Wheat</option>
            <option value="Legume">Legume</option>
            <option value="Groundnut">Groundnut</option>
            <option value="Rice">Rice</option>
            <option value="Maize">Maize</option>
            <option value="Chickpea">Chickpea</option>
            <option value="Kidneypeas">Kidneypeas</option>
            <option value="Pigeonpeas">Pigeonpeas</option>
            <option value="Mothbeans">Mothbeans</option>
            <option value="Mungbean">Mungbean</option>
            <option value="Blackgram">Blackgram</option>
            <option value="Lentil">Lentil</option>
            <option value="Pomegrante">Pomegrante</option>
            <option value="Banana">Banana</option>
            <option value="Mango">Mango</option>
            <option value="Grapes">Grapes</option>
            <option value="Watermelon">Watermelon</option>
            <option value="Muskmelon">Muskmelon</option>
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Papaya">Papaya</option>
            <option value="Coconut">Coconut</option>
            <option value="Cotton">Cotton</option>
            <option value="Coffee">Coffee</option>
            <option value="Jute">Jute</option>     
            <option value="Tea">Tea</option>
            <option value="Sugarcane">Sugarcane</option>            
            <option value="red chilli">red chilli</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SelectCrop;
