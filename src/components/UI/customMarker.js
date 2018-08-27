import React from 'react';

import Rating from './rating';

const CustomMarker = ({ text, rating }) => (
  <div className="custom-marker">
    <span className={`pointer  pointer-${rating}`}>{rating}</span>
    <div className="info">
      <div className="name">{text}</div>
      <Rating value={rating} />
    </div>
  </div>
);

export default CustomMarker;
