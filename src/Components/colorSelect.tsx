import React from "react";
import logo from "./logo.svg";
import { useState } from "react";

const Colorselect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [shownColors, setShownColors] = useState<string[]>([]);

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let selectedOptions: string[] = [];
    for (let option of Array.from(e.target.selectedOptions)) {
      selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
  };
  return (
    <div>
      <select
        multiple
        value={selectedColors}
        onChange={onChange}
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "85%",
          margin: "auto",
        }}
      >
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      <button
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "85%",
          margin: "auto",
        }}
        onClick={() => {
          setShownColors([...selectedColors]);
        }}
      >
        Show colors
      </button>
      <div>
        {shownColors.map((color) => (
          <div style={{ backgroundColor: color, height: 200, flex: 1 }} />
        ))}
      </div>
    </div>
  );
};

export default Colorselect;
