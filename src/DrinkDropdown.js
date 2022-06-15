import React from 'react';

export default function DrinkDropdown({ setDrink }) {
  return (
    <div>
      Select a drink:
      <select onChange={e => setDrink(e.target.value)}>
        <option value='1'>Horchata</option>
        <option value='2'>PassionFruit Juice</option>
        <option value='3'>Coke</option>
      </select>
    </div>
  );
}
