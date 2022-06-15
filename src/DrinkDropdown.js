import React from 'react';

export default function DrinkDropdown({ setDrink }) {
  return (
    <div>
      Select a drink:
      <select onChange={e => setDrink(e.target.value)}>
        <option value='1'>Tamales</option>
        <option value='2' >Torta</option>
        <option value='3' >Birria tacos</option>
      </select>
    </div>
  );
}
