import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {

  // a set of random numbers on the page
  const [dice, setDice] = useState([]);
    // Generate array of 10 random numbers
  const newDice = () => {
    const diceArr = [];
    for( let i = 0; i < 10; i++){
      diceArr.push(Math.ceil(Math.random() * 6));
    }
    return diceArr;
  }

  console.log(newDice())
  // clicking them turns the number a different colour
  // click button that returns new numbers on screen except for the ones that were clicked
  // 

  return (
    <div className="App">
      <div className="diceContainer">
      <Dice
       value={1}
      />
      <Dice
       value={3}
      />
      <Dice
       value={4}
      />
      <Dice
       value={3}
      />
      <Dice
       value={1}
      />
      <Dice
       value={2}
      />
      <Dice
       value={4}
      />
      <Dice
       value={1}
      />
      <Dice
       value={5}
      />
      <Dice
       value={6}
      />
      </div>
    </div>
  )
}

export default App
