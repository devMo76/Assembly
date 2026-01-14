import React from "react";
import "./LanguageTags.css";

export default function LanguageTags({ deadTags }) {
  const tags = [
    { name: "html", label: "HTML" },
    { name: "css", label: "CSS" },
    { name: "javascript", label: "JavaScript" },
    { name: "react", label: "React" },
    { name: "typescript", label: "TypeScript" },
    { name: "nodejs", label: "Node.js" },
    { name: "python", label: "Python" },
    { name: "ruby", label: "Ruby" },
    { name: "assembly", label: "Assembly" },
  ];

  return (
    <div className="language-tags-container">
      {tags.map((tag) => {
        const isDead = deadTags.includes(tag.name);
        return (
          <div
            key={tag.name}
            className={`language-tag ${tag.name} ${isDead ? "dead" : ""}`}
          >
            {isDead && <span className="skull">💀</span>}
            {tag.label}
          </div>
        );
      })}
    </div>
  );
}
