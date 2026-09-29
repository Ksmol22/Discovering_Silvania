import React from 'react';
import imgCafeRama from '../assets/cafe.png';
import imgTazaCafe from '../assets/taza de cafe.png';
import './CoffeeDecor.css';

const CoffeeDecor = () => {
  // Pre-defined elegant placements to frame the content perfectly without overlapping
  const elements = [
    { id: 1, type: 'rama', src: imgCafeRama, top: '5%', left: '-2%', rotation: 25, scale: 1.2 },
    { id: 2, type: 'taza', src: imgTazaCafe, top: '25%', right: '2%', rotation: -15, scale: 0.9 },
    { id: 3, type: 'rama', src: imgCafeRama, top: '45%', right: '-3%', rotation: -45, scale: 1.4 },
    { id: 4, type: 'taza', src: imgTazaCafe, top: '65%', left: '3%', rotation: 10, scale: 0.8 },
    { id: 5, type: 'rama', src: imgCafeRama, top: '85%', left: '-1%', rotation: 15, scale: 1.1 },
    { id: 6, type: 'taza', src: imgTazaCafe, top: '90%', right: '4%', rotation: -20, scale: 1 },
  ];

  return (
    <div className="global-coffee-decor">
      {elements.map((el) => (
        <img
          key={el.id}
          src={el.src}
          alt=""
          className={`scattered-item ${el.type}`}
          style={{
            top: el.top,
            ...(el.left ? { left: el.left } : {}),
            ...(el.right ? { right: el.right } : {}),
            transform: `rotate(${el.rotation}deg) scale(${el.scale})`
          }}
        />
      ))}
    </div>
  );
};

export default CoffeeDecor;
