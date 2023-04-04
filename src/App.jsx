import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice());
  // generate array of random numbers
  // save array to state. Use state to map over array and generate dice component

  function allNewDice () {
    const diceArr = [];
    for(let i = 0; i < 10; i++){
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid()
      });
    }
    return diceArr;
  }

  

  const diceHtml = dice.map( elem => <Dice value={elem.value} id={elem.id} isHeld={elem.isHeld} />)


  // clicking them turns the number a different colour
  // click button that returns new numbers on screen except for the ones that were clicked
  // 

  const rollDice = () => {
    setDice(allNewDice());
  }

  return (
    <div className="App">
      <div className="diceContainer">
       {diceHtml}
      </div>
      <button className='diceBtn' onClick={rollDice} >Roll</button>
    </div>
  )
}

export default App
