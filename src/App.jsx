import { useState, useEffect } from 'react'
import './App.css'
import Dice from './components/Dice'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzie, setTenzie] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect( () =>{
    console.log(dice, 'changed');
    const allHeld = dice.every( elem => elem.isHeld);
    const firstValue = dice[0].value;
    const everyValue = dice.every( elem => elem.value == firstValue);
    if(allHeld && everyValue) {
      setTenzie(true);
      console.log('you win!');
    }
  },[dice])

  function allNewDice(){
    const diceArr = [];
    for(let i = 0; i < 10; i++){
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false, 
        id: nanoid()
      })     
    }
    return diceArr;
  }

  const diceHtml = dice.map( elem => {
   return <Dice 
   id={elem.id}
   value={elem.value}
   isHeld={elem.isHeld}
   holdDice={() => holdDice(elem.id)}
    />
  })

  function diceRoll() {
    if(tenzie){
      setDice(allNewDice); setTenzie(false);
      setCounter(0);
    } else {
      setDice(prevArray => prevArray.map( elem => {
      return  elem.isHeld ?
        elem :
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false, 
          id: nanoid()
        }
      }));
      setCounter(prevCount => prevCount + 1);
    }
  }

  function holdDice(id) {
    setDice(prevArray => prevArray.map(elem => {
       return elem.id == id ? 
       {...elem, isHeld: !elem.isHeld} :
       elem
     })
    );
  }

  return (
    <div className='App'>
      {tenzie && <Confetti />}
      <div className="diceContainer">
        {diceHtml}
      </div>
      <button className='diceBtn' onClick={diceRoll}>{tenzie ? 'New Game' : 'Roll'}</button>
      <div className="score">
        <p>Score:</p>
        <div className="counter">
        {counter}
        </div>
      </div>
    </div>
  )
}

export default App
