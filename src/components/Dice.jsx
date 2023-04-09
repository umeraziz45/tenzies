import React from "react";

export default function Dice (props) {
  return (
    <div className="dice">
      <h2 className="dice-number">{props.value}</h2>
    </div>
  )
}