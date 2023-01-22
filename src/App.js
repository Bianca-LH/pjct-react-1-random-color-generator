import color from 'random-color-hex-generator';
import { useState } from 'react';

export default function App() {
  const [colorChip, setColorChip] = useState(color());
  return (
    <div
      style={{
        border: `5px solid ${colorChip}`,
        borderRadius: '10px',
        backgroundColor: colorChip,
      }}
    >
      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          setColorChip(color());
        }}
      >
        Generate
      </button>
      <div
        style={{
          border: `5px solid ${colorChip}`,
          borderRadius: '10px',
          backgroundColor: colorChip,
        }}
      >{`Generated Color: ${colorChip}`}</div>
    </div>
  );
}

// function changeToUpperCase(color) {
//   return color.toUpperCase();
// }
// const result = changeToUpperCase("#dc2843");

// console.log(result);
