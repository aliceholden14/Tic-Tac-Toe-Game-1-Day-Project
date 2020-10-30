import React, { useState } from "react";
import Board from "../board/index";

function Game() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [historyState, setHistoryState] = useState([
    { squares: Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);

  const history = historyState;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    console.log(i);
    const history = historyState.slice(0, stepNumber + 1);
    const current = history[history.length - 1];

    const sqrs = current.squares.slice();

    if (calculateWinner(sqrs) || sqrs[i]) {
      return;
    }
    sqrs[i] = xIsNext ? "X" : "O";

    setHistoryState([...history, { squares: sqrs }]);

    setState(
      state.map((square, index) => {
        let value = xIsNext ? "X" : "O";

        if (i === index) {
          return value;
        } else return square;
      })
    );
    setStepNumber(history.length);
    return setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  function calculateWinner(state) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          state={current.squares}
          setState={setState}
          calcWinner={calculateWinner}
          setXIsNext={setXIsNext}
          xIsNext={xIsNext}
          handleClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
