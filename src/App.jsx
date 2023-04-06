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
        isHeld: false,
        id: nanoid()
      });
    }
    return diceArr;
  }

  const hold = id => {
    setDice(oldDice => oldDice.map( die => {
      return die.id == id ?
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const diceHtml = dice.map( elem => <Dice key={elem.id} value={elem.value} isHeld={elem.isHeld} hold={() => hold(elem.id)} />)

  // clicking them turns the number a different colour
  // click button that returns new numbers on screen except for the ones that were clicked
   // create a function that loops through array and returns one with new numbers except for the one that have true as value for isHeld
  const rollDice = () => {
    setDice( oldArray => oldArray.map( elem => {
      return elem.isHeld ? 
             elem :
             {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid()
             }
    }));
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
