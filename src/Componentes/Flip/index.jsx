import React, { useState } from 'react';
import frente from '/public/img/frente.jpeg';
import verso from '/public/img/verso.jpeg';

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`relative w-[200px] h-[300px] perspective-[1000px] ${flipped ? 'overflow-hidden' : ''}`}
      onClick={handleFlip} 
    >
      <div className={`w-full h-full relative transform-style-[preserve-3d] transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={verso}
            alt="ilustração"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
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
