import React, {useState} from "react"
import Board from "../board/index"

function Game(){
    const [state, setState] = useState(Array(9).fill(null));

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

    return(
        <Board state={state} setState={setState} calcWinner={calculateWinner}/>
    )
}

export default Game