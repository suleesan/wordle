import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className={`key w-16 h-16 border-2 border-gray-600 dark:border-slate-200 dark:text-white mt-2 mx-1 p-2 rounded-md text-lg flex items-center justify-center cursor-pointer ${
        bigKey ? "w-24" : ""} ${disabled && "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"}`}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
