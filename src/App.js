import React, { useState } from 'react';
import Board from './Components/Board/Board.jsx';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  return (
    <div className="game">
    <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
  </div>
  );
}

export default App;
