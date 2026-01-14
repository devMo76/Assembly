import React from "react";
import Header from "./Header.jsx";
import LanguageTags from "./LanguageTags.jsx";
import WordBoxes from "./WordBoxes.jsx";
import Keyboard from "./Keyboard.jsx";

import "./GameBoard.css";

export default function GameBoard() {
  const [deadTags, setDeadTags] = React.useState([]);

  return (
    <div className="game-container">
      <Header />
      <LanguageTags deadTags={deadTags} />
      <div style={{ marginTop: "8px" }}></div>
      <WordBoxes setDeadTags={setDeadTags} deadTags={deadTags} />
      <div style={{ marginTop: "8px" }}></div>
    </div>
  );
}
