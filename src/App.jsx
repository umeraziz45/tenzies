import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(createNewDice());

  function createNewDice (){
    const diceArr = [];

    for(let i = 0; i < 10; i++){
      diceArr.push({
        value:Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
        );
    }

    return diceArr;
  }

  const diceHtml = dice.map( elem => {
    return <Dice key={elem.id} value={elem.value} isHeld={elem.isHeld}  clickDice={() => clickDice(elem.id)} />
  });

  const rollDice = () => setDice( () => createNewDice());

  const clickDice = id => {
    console.log(id);
  }

  console.log(dice);

  return (
    <div className='App'>
      <div className="diceContainer">
        {diceHtml}
      </div>
      <button onClick={rollDice} className='diceBtn'>Roll!</button>
    </div>
  )
}

export default App
