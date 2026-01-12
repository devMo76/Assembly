import React from "react";
import "./WordBoxes.css";
import Keyboard from "./Keyboard";

export default function WordBoxes() {
  const word = "ASSEMBLY";

  const [pressedLetter, setPressedLetter] = React.useState([]);

  const [guessedPositions, setGuessedPositions] = React.useState(
    Array(word.length).fill(null)
  );

  function handleGuessedPositions(letters) {
    compareLetters(letters);
  }

  function compareLetters(letters) {
    const wordArray = word.toUpperCase().split("");
    const pressedKey = letters.toUpperCase();

    setPressedLetter((prev) => [...prev, pressedKey]);

    setGuessedPositions((prev) => {
      const alreadyFilled = prev.filter(
        (letter, index) => letter === pressedKey
      ).length;

      const totalOccurrences = wordArray.filter(
        (char) => char === pressedKey
      ).length;

      if (alreadyFilled >= totalOccurrences) {
        return prev;
      }

      let occurrenceCount = 0;

      return prev.map((current, index) => {
        if (wordArray[index] === pressedKey) {
          occurrenceCount++;
          if (current) return current;

          if (occurrenceCount === alreadyFilled + 1) {
            return pressedKey;
          }
        }
        return current;
      });
    });
  }

  return (
    <>
      <div className="word-boxes-container">
        {word.split("").map((char, index) => (
          <div key={index} className="word-box">
            {guessedPositions[index] || ""}
          </div>
        ))}
      </div>
      <Keyboard
        handleGuessedPositions={handleGuessedPositions}
        compareLetters={compareLetters}
      />
    </>
  );
}
