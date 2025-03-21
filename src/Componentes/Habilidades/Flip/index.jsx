import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ nome, descricao }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="flip card"
      role="region"
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className='itens'>{nome}</h3>
        </div>
        <div className="flip-card-back">
          <h3 className='itens'>{descricao}</h3>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
