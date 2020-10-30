import React, { useState } from "react";
import Square from "../square";
import "../../App.css";

function Board({ state, setState, calcWinner}) {
  const [xIsNext, setXIsNext] = useState(true);
  //const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  const winner = calcWinner(state);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i){
    if (calcWinner(state) || state[i]) {
      return;
    }

    setState(state.map((square, index)=>{ 
      let value = xIsNext ? 'X' : 'O';

      if (i===index){
        return value
      } else return square
    }))
    return setXIsNext(!xIsNext);
    }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square val={state[0]} onClick={() => {handleClick(0)}}/>
        <Square val={state[1]} onClick={() => {handleClick(1)}}/>
        <Square val={state[2]} onClick={() => {handleClick(2)}}/>
      </div>
      <div className="board-row">
        <Square val={state[3]} onClick={() => {handleClick(3)}}/>
        <Square val={state[4]} onClick={() => {handleClick(4)}}/>
        <Square val={state[5]} onClick={() => {handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square val={state[6]} onClick={() => {handleClick(6)}}/>
        <Square val={state[7]} onClick={() => {handleClick(7)}}/>
        <Square val={state[8]} onClick={() => {handleClick(8)}}/>
      </div>
    </div>
  );
}

export default Board;
