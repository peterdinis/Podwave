import React from 'react';

interface IStarProps {
    filled: boolean;
}

const Star = ({ filled }: IStarProps) => {
  return (
    <svg
      className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 17.75l-5.664 3.395 1.467-6.283-4.873-4.354 6.43-.556L12 3l2.64 6.952 6.43.556-4.873 4.354 1.467 6.283L12 17.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Star;