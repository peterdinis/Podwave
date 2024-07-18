"use client"

import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setRating(index + 1)}
          onMouseLeave={() => setRating(0)}
        >
          <Star filled={index < rating} />
        </button>
      ))}
    </div>
  );
};

export default StarRating;