import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className='img'>
      <img src={`food-${foodId}.png`}/>
      <img src={`side-${sideId}.png`}/>
      <img src={`drink-${drinkId}.png`}/>

    </div>
  );
}
