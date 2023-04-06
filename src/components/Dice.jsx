import React from "react";

export default function Dice (props) {
  return (
    <div 
    className={props.isHeld ? 'clicked' : 'dice'} 
    onClick={props.hold}
    >
      <h2 className="dice-number">{props.value}</h2>
    </div>
  )
}