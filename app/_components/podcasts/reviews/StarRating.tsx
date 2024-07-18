"use client"

import React, { useState } from 'react';
import Star from './Star';
import { Button } from '@/components/ui/button';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setRating(index + 1)}
          onMouseLeave={() => setRating(0)}
        >
          <Star filled={index < rating} />
        </Button>
      ))}
    </div>
  );
};

export default StarRating;