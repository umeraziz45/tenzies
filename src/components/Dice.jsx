import React from "react";

export default function Dice (props) {
  return (
    <div className={props.isHeld ? 
    'clicked' : 
    "dice"} onClick={props.holdDice}
    key={props.id}>
      <h2 >{props.value}</h2>
    </div>
  )
}