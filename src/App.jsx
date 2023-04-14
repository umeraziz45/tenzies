import { useState, useEffect } from 'react'
import './App.css'
import Dice from './components/Dice'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {

  const [dice, setDice] = useState(createNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect( () => {
    console.log('change');
    const allHeld = dice.every( elem => elem.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every( elem => elem.value === firstValue);
    if(allSameValue && allHeld) {
      console.log('you win');
      setTenzies(true);
    }
  }, [dice])

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

  
  const rollDice = () => {
    if(tenzies){
      setTenzies(false)
      setDice(createNewDice);
    } else {
      setDice( prevArray =>  prevArray.map( elem =>  {
        return elem.isHeld ? 
          elem :
          {
            value:Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid() 
          }
        }
      ));
    }
  }
  
  const clickDice = id => {
   setDice(oldDice => oldDice.map( elem => {
    return elem.id == id ? 
      {...elem, isHeld: !elem.isHeld} :
      elem
    })
   ) 
  }
  
  const diceHtml = dice.map( elem => {
    return <Dice key={elem.id} value={elem.value} isHeld={elem.isHeld}  clickDice={() => clickDice(elem.id)} />
  });
  console.log(tenzies)

  return (
    <div className='App'>
      {tenzies && < Confetti/>}
      <div className="diceContainer">
        {diceHtml}
      </div>
      <button onClick={rollDice} className='diceBtn'>{tenzies ? 'New Game' : 'Roll'}</button>
      
    </div>
  )
}

export default App
