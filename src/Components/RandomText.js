import React from 'react';

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
  const randomText = textOptions[randomIndex];

  return (
    <div className="random-text">
      <p>{randomText}</p>
    </div>
  );
};

export default RandomText;