import React, { useState } from 'react';
function ColorChange() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <div>
      <div 
        style={{ 
          backgroundColor: `rgb(${red}, ${green},${blue})`,
          width: '100%',
          height: '200px',
          border: '1px solid #000'
        }}
      ></div>
      <div>
        <button onClick={() => { setRed(255); setGreen(0); setBlue(0); }}>
          Red
        </button>
        <button onClick={() => { setRed(0); setGreen(255); setBlue(0); }}>
          Green
        </button>
        <button onClick={() => { setRed(0); setGreen(0); setBlue(255); }}>
          Blue
        </button>
      </div>
    </div>
  );
}
export default ColorChange;