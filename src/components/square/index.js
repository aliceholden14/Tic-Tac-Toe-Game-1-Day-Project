import React from "react";
import "../../App.css";

function Square({ val, onClick }) {
 
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      { val }
    </button>
  );
}

export default Square;
