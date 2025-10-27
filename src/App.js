import React, { useState } from 'react';
import './App.css';

function Counter({initialCount = 0, initialStep = 1}) {
  const [count, setCount] = useState(initialCount);
  const [step,setStep] = useState(initialStep);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(initialCount);
  const reset = () => setCount(initialCount);

  const canDecrement = count - step >= 0;
  

  return (
    <div className="App">
      <h1>React Counter</h1>
      <div aria-live="polite" role="status">
      <h2>Count: {count}</h2>
      </div>
      <div className="controls">
        <button onClick={increment}>Increment by {step}</button>
        <button onClick={decrement}>Decrement by {step}</button>
         Decrement by {step}
        <button onClick={reset}>Reset</button>
      </div>

      <div className="step-input">
        <label htmlFor={`step-${initialCount}`}>
          Step:
          <input
          id={`step-${initialCount}`}
          type="number"
          value={step}
          min="1"
          onChange={e => setStep(Math.max(1, Number(e.target.value)))}
          />
        </label>
      </div>
    </div>
  );
}
function App() {
  return(
    <div className="App">
      <h3> Custom Counter </h3>
      <Counter initialCount={5} initial step={2} />
    </div>
  )
}
export default App;