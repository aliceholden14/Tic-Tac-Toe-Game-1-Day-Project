import React, { useState } from "react";
import "../../App.css";

function Square({ val }) {
  const [value, setValue] = useState("");

  return (
    <button
      className="square"
      onClick={() => {
        setValue("X");
      }}
    >
      {value}
    </button>
  );
}

export default Square;
