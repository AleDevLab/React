import "../../CSS/Title.css";
import { useState, useEffect } from "react";

export default function Title({ headingParts, paragraph }) {
  const fullText = headingParts.map(part => part.text).join(" ");
  const charsWithColor = headingParts.flatMap((part, index) =>
    part.text.split("").map(char => ({ char, color: part.color }))
      .concat(index < headingParts.length - 1 ? [{ char: " ", color: part.color }] : [])
  );

  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    let timeout;
    if (displayedLength < charsWithColor.length) {
      // Avanza en la escritura
      timeout = setTimeout(() => setDisplayedLength(displayedLength + 1), 100);
    } else {
      // Espera 1.5s y reinicia
      timeout = setTimeout(() => setDisplayedLength(0), 1500);
    }
    return () => clearTimeout(timeout);
  }, [displayedLength, charsWithColor.length]);

  return (
    <div className="title-container">
      <h1 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {charsWithColor.slice(0, displayedLength).map((item, index) => (
          <span key={index} style={{ color: item.color }}>
            {item.char}
          </span>
        ))}
        {/* Cursor parpadeante */}
        <span className="cursor">|</span>
      </h1>
      <p>{paragraph}</p>
    </div>
  );
}
