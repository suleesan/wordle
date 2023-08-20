import React, { useContext } from "react";
import { AppContext } from "../App";

function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleRefresh}>
      Play Again
    </button>
  );
}

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver flex flex-col items-center text-black dark:text-white">
      <h3 className="mt-4 text-xl">
        {gameOver.guessedWord
          ? "You correctly guessed the Wordle!"
          : "You failed to guess the Wordle"}
      </h3>
      <h1 className="mt-4 text-3xl">
        Correct Word: <span className="font-bold">{correctWord}</span>
      </h1>
      {gameOver.guessedWord && (
        <h3 className="mt-4 text-xl">You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <div className="mt-4 border dark:border-white border-black rounded-md hover:bg-gray-200 dark:hover:bg-gray-400 p-3 w-1/2">
        <RefreshButton />
      </div>
    </div>
  );
}

export default GameOver;
