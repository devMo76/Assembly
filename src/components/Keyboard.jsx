import React from "react";
import "./Keyboard.css";

export default function Keyboard({ handleGuessedPositions, compareLetters }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function buttonPressed(letter) {
    handleGuessedPositions(letter);
  }

  return (
    <div className="keyboard-container">
      {letters.map((letter) => (
        <button
          key={letter}
          className="key-button"
          onClick={() => buttonPressed(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
