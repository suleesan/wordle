import React from "react";
import Letter from "./Letter";

function Board() {
  const attempts = [0, 1, 2, 3, 4, 5];

  return (
    <div className="mt-3 flex flex-col">
      {attempts.map((attemptVal) => (
        <div key={attemptVal} className="row flex-1 flex flex-row mt-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Letter key={index} letterPos={index} attemptVal={attemptVal} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
