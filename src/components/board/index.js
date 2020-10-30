import React, { useState } from "react";
import Square from "../square";
import "../../App.css";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square val={state[0]} />
        <Square val={state[1]} />
        <Square val={state[2]} />
      </div>
      <div className="board-row">
        <Square val={state[3]} />
        <Square val={state[4]} />
        <Square val={state[5]} />
      </div>
      <div className="board-row">
        <Square val={state[6]} />
        <Square val={state[7]} />
        <Square val={state[8]} />
      </div>
    </div>
  );
}

export default Board;
