import React from "react";
import "./WordBoxes.css";
import Keyboard from "./Keyboard";

export default function WordBoxes({ setDeadTags, deadTags }) {
  const word = "ASSEMBLY";
  const [guessedPositions, setGuessedPositions] = React.useState(
    Array(word.length).fill(null)
  );
  const [gameStatus, setGameStatus] = React.useState("playing");

  React.useEffect(() => {
    checkWinLoseCondition(guessedPositions, deadTags);
  }, [guessedPositions, deadTags]);

  function handleGuessedPositions(letters) {
    compareLetters(letters);
  }

  function killLanguageTag() {
    setDeadTags((prev) => {
      const allTags = [
        "html",
        "css",
        "javascript",
        "react",
        "typescript",
        "nodejs",
        "python",
        "ruby",
        "assembly",
      ];
      const nextDeadTag = allTags.find((tag) => !prev.includes(tag));
      return nextDeadTag ? [...prev, nextDeadTag] : prev;
    });
  }

  function compareLetters(letters) {
    const wordArray = word.toUpperCase().split("");
    const pressedKey = letters.toUpperCase();

    if (!wordArray.includes(pressedKey)) {
      killLanguageTag();
      return;
    }

    setGuessedPositions((prev) => {
      const alreadyFilled = prev.filter(
        (letter) => letter === pressedKey
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

  function checkWinLoseCondition(guessedPositions, deadTags) {
    const isFilled = guessedPositions.every((letter) => letter !== null);
    if (isFilled) {
      setGameStatus("win");
      return;
    }

    if (deadTags.length >= 9) {
      setGameStatus("lose");
      return;
    }
  }

  function handleNewGame() {
    setGuessedPositions(Array(word.length).fill(null));
    setDeadTags([]);
    setGameStatus("playing");
  }

  return (
    <>
      {gameStatus === "win" && (
        <div className="game-status-banner game-status-banner--win">
          <div className="game-status-title">You win!</div>
          <div className="game-status-subtitle">Well done! 🎉</div>
        </div>
      )}

      {gameStatus === "lose" && (
        <div className="game-status-banner game-status-banner--lose">
          <div className="game-status-title">Game over!</div>
          <div className="game-status-subtitle">
            You lose! Better start learning Assembly! 🧠
          </div>
        </div>
      )}

      {gameStatus !== "playing" && (
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
      )}
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
