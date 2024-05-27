import wordBank from "./wordbank.txt";
import guessBank from "./guesses.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;

  // set valid guesses
  await fetch(guessBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });

  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      // generate a random word by picking from word array using math floor (to round) and random
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    });
  return { wordSet, todaysWord };
};
