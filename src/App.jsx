import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice () {
    const diceArr = [];
    for( let i = 0; i < 10; i++){
      diceArr.push(Math.ceil(Math.random() * 6));
    }
    return diceArr;
  }

  function rollDice() {
    setDice( allNewDice());
  }

  const diceElement = dice.map( elem => <Dice value={elem} />
  )

  // clicking them turns the number a different colour
  // click button that returns new numbers on screen except for the ones that were clicked
  // 

  return (
    <div className="App">
      <div className="diceContainer">
       {diceElement}
      </div>
      <button className='diceBtn' onClick={rollDice}>Roll</button>
    </div>
  )
}

export default App
