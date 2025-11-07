import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);

  const letter = board[attemptVal][letterPos];
  const correctWordArray = correctWord.toUpperCase().split("");
  const guessArray = board[attemptVal];

  // count letters in correct word
  const correctWordLetterCount = correctWordArray.reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});

  // determine the state of each letter
  const letterStates = guessArray.map((char, index) => {
    if (correctWordArray[index] === char) {
      correctWordLetterCount[char]--;
      return "correct";
    }
    return "";
  });

  // second pass to mark almost correct letters and error letters
  guessArray.forEach((char, index) => {
    if (letterStates[index] === "" && correctWordLetterCount[char] > 0) {
      letterStates[index] = "almost";
      correctWordLetterCount[char]--;
    } else if (letterStates[index] === "") {
      letterStates[index] = "error";
    }
  });

  const letterState =
    currAttempt.attempt > attemptVal ? letterStates[letterPos] : "";

  useEffect(() => {
    if (letter !== "" && letterState === "error") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div
      className={`flex-33 h-16 w-16 text-xl dark:text-white font-extrabold border-2 border-gray-300 dark:border-slate-200 m-1 p-5 ${
        letterState === "correct"
          ? "bg-[#6ca965]"
          : letterState === "almost"
          ? "bg-[#c8b653]"
          : letterState === "error"
          ? "bg-[#787c7f]"
          : ""
      }`}
    >
      {letter}
    </div>
  );
}

export default Letter;
