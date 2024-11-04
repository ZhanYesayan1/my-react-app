// src/components/Card.js
import React from 'react';
import '../styles/card.css';

const Card = ({ title, value, percentage }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{percentage} today</span>
    </div>
  );
};

export default Card;
