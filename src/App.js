import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div className="container" style={{backgroundColor: backgroundColor}}>
      <h1>Background Colour Changer</h1>
      <div className="buttons">
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('yellow')}>Yellow</button>
      </div>
    </div>
);
}
export default App;