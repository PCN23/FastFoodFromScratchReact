import React from 'react';
import Instruction from './Instruction.js';

export default function InstructionList({ instructions }) {
  return (
    <section>
      <h2> What goes here?!</h2>
      {
        instructions.map((instruction, i) => <Instruction 
          instruction={instruction} key={instruction + i}/>)
      }
    </section>
  );
}
