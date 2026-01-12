import Header from "./Header.jsx";
import LanguageTags from "./LanguageTags.jsx";
import WordBoxes from "./WordBoxes.jsx";
import Keyboard from "./Keyboard.jsx";

import "./GameBoard.css";

export default function GameBoard() {
  return (
    <div className="game-container">
      <Header />
      <LanguageTags />
      <div style={{ marginTop: "8px" }}></div>
      <WordBoxes />
      <div style={{ marginTop: "8px" }}></div>
    </div>
  );
}
