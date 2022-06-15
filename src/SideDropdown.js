import React from 'react';

export default function SideDropdown({ setSide }) {
  return (
    <div>
    Select a drink:
      <select onChange={e => setSide(e.target.value)}>
        <option value='1'>Rice</option>
        <option value='2'>Corn</option>
        <option value='3'>Quinoa salad</option>
      </select>
    </div>
  );
}
