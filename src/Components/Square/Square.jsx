// Square.js
//Maneja el boton de cada celda 
import React from 'react';


export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
