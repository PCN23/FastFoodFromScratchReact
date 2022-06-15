import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>
    Select your food selection:
      <select onChange={e => setFood(e.target.value)}>
        <option value='1'>Tamales</option>
        <option value='2'>Torta</option>
        <option value='3'>Birria Tacos</option>
      </select>
    </div>
  );
}
