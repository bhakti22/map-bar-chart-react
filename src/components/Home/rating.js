import React from 'react';

const Rating = ({value}) => {
  return(
    <div className="rating">
      <span className={`fa fa-star ${value >= 1 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 2 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 3 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 4 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 5 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 6 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 7 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 8 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 9 ? 'checked' : ''}`}></span>
      <span className={`fa fa-star ${value >= 10 ? 'checked' : ''}`}></span>
    </div>
  )
}

export default Rating;
