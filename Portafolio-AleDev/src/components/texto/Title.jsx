import "../../CSS/Title.css";

export default function Title({ headingParts, paragraph }) {
  return (
    <div className="title-container">
      <h1>
        {headingParts.map((part, index) => (
          <span key={index} style={{ color: part.color }}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p>{paragraph}</p>
    </div>
  );
}
