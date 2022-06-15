import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
        Enter your order name: <input onChange={e => setOrderName(e.target.value)}/>
    </section>
  );
}
