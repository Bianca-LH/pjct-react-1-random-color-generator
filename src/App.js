import color from 'node-random-color';
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
      <div>Generated color: {colorChip}</div>
    </div>
  );
}
