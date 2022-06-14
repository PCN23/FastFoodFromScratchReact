import { useState } from 'react/cjs/react.production.min';
import './App.css';
import OrderImages from './OrderImages';

function App() {
  const [foodId, setFoodId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [drinkId, setDrinkId] = useState('1');
  const [instructions, setInstructions] = useState([]);
  const [formInstruction, setFormInstruction] = useState('');
  const [orderName, setOrderName] = useState('');


  
  return (
    <div className="App">
      <OrderImages foodId={foodId}
        sideId={sideId}
        drinkId={drinkId} />
      <h1>Hello my order {orderName}
      </h1>
      <div className='bottom'>
        <OrderNameInput setOrderName={setOrderName}/>
        <section className='dropdowns'>
          <div>
            <FoodDropdown />
            <SideDropdown />
            <DrinkDropdown />

          </div>
        </section>
        <InstructionsForm setFormInstruction={setFormInstruction}/>
        <InstructionsList setInstructions={setInstructions}/>
      </div>
    </div>
  );
}

export default App;
