import { useState } from 'react';
import './App.css';
import OrderImages from './OrderImages.js';
import OrderNameInput from './OrderNameInput.js';
import DrinkDropdown from './DrinkDropdown.js';
import FoodDropdown from './FoodDropdown.js';
import SideDropdown from './SideDropdown.js';
import InstructionsForm from './InstructionForm.js';
import InstructionsList from './InstructionList.js';


function App() {
  const [foodId, setFoodId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [drinkId, setDrinkId] = useState('1');
  const [instructions, setInstructions] = useState([]);
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
            <FoodDropdown setFood={setFoodId}/>
            <SideDropdown setSide={setSideId}/>
            <DrinkDropdown setDrink={setDrinkId}/>

          </div>
        </section>
        <InstructionsForm setInstructions={setInstructions} instructions={instructions}/>
        <InstructionsList instructions={instructions}/>
      </div>
    </div>
  );
}

export default App;
