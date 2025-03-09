import { useState } from "react";
import "./styles.css";

export default function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="container">
      <div className="card1">
        <h2 style={{ color: "white" }}>Random Number Generate</h2>
        <p className="number">{number !== null ? number : "Click Below"}</p>
        <button onClick={generateRandomNumber}>Generate</button>
      </div>
    </div>
  );
}
