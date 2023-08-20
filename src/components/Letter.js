import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  // Determine the state of the letter (correct, almost, error)
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

  // Disable the letter if neither correct nor almost
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div
      className={`flex-33 h-16 w-16 text-xl dark:text-white font-extrabold border-2 border-gray-300 dark:border-slate-200 m-1 p-5 ${
        letterState === "correct" ? "bg-[#6ca965]" :
        letterState === "almost" ? "bg-[#c8b653]" :
        letterState === "error" ? "bg-[#787c7f]" :
        ""
      }`}
    >
      {letter}
    </div>
  );
}

export default Letter;
