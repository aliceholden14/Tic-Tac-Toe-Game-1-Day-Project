import React, {useState} from "react"
import Board from "../board/index"

function Game(){
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [historyState, setHistoryState] = useState([{squares: Array(9).fill(null)}]);

    const history = historyState;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    

    function handleClick(i){
        console.log(i)
        const history = historyState;
        const current = history[history.length - 1];
        const sqrs = current.squares.slice();

        if (calculateWinner(sqrs) || sqrs[i]) {
          return;
        }
        sqrs[i] = xIsNext ? 'X': 'O';

        setHistoryState(
         [...history, {squares: sqrs}]
        )
    

        setState(state.map((square, index)=>{ 
          let value = xIsNext ? 'X' : 'O';
            
            if (i===index){
            return value
          } else return square
        }))
        return setXIsNext(!xIsNext);
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

    return(
        <div className="game">
        <div className="game-board">
        <Board state={current.squares} setState={setState} calcWinner={calculateWinner} setXIsNext={setXIsNext} xIsNext={xIsNext} handleClick={handleClick}/>
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
}

export default Game