import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>
    Select a drink:
      <select onChange={e => setFood(e.target.value)}>
        <option value='1'>Horchata</option>
        <option value='2' >PassionFruit juice</option>
        <option value='3' >Coke</option>
      </select>
    </div>
  );
}
