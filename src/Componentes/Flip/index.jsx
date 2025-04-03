import React, { useState } from 'react';
import frente from '/public/img/frente.jpeg';
import verso from '/public/img/verso.jpeg';
import './FlipCard.css'; // Importe o arquivo CSS

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      onClick={handleFlip} 
    >
      <div className="flip-card">
        <div className="flip-card-front ">
          <img
            src={verso}
            alt="ilustração"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flip-card-back">
          <img
            src={frente}
            alt="foto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
