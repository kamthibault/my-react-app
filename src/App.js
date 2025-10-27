import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step,setStep] = useState(1);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>React Counter</h1>
      <div aria-live="polite" role="status">
      <h2>Count: {count}</h2>
      </div>
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="step-input">
        <label>
          Step:
          <input
          type="number"
          value={step}
          onChange={e => setStep(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}
export default App;

