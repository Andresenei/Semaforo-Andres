import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const toggleColor = () => {
    const colors = ["red", "yellow", "green"];
    if (showPurple) colors.push("purple");
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-light-container">
      <div
        className={`light red ${color === "red" ? "glow" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "glow" : ""}`}
        onClick={() => setColor("green")}
      ></div>
      {showPurple && (
        <div
          className={`light purple ${color === "purple" ? "glow" : ""}`}
          onClick={() => setColor("purple")}
        ></div>
      )}
      <div className="buttons mt-3">
        <button className="btn btn-primary me-2" onClick={toggleColor}>
          Cambiar color
        </button>
        <button className="btn btn-secondary" onClick={() => setShowPurple(true)}>
          Agregar púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
