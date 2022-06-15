import React from 'react';

export default function InstructionsForm({ setInstruction, handleSubmit }) {

  return (
    <section>
      <form onSubmit={handleSubmit}>
      INSTRUCTIONS:
        <input value={setInstruction} onChange={e => setInstruction(e.target.value)}/>
        <button>Submit</button>

      </form>
    </section>
  );
}
