import { useState } from 'react';
import React from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }



  return (
    <section>
      <form onSubmit={handleSubmit}>
      INSTRUCTIONS:
        <input value={instructionInput} onChange={e => 
          setInstructionInput(e.target.value)}/>
        <button>Submit</button>

      </form>
    </section>
  );
}
