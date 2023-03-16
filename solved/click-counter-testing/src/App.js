import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1);
      setErrorMessage('');
    }
  }
  const decrementCount = () => {
    if (count <= 0) {
      setErrorMessage('The counter can not go below zero');
    }
    else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p data-test='counter-display'>counter: <div data-test='count'>{count}</div></p>
      <button data-test='increment-button' onClick={incrementCount}>
        increment counter
      </button>
      <button data-test='decrement-button' onClick={decrementCount}>
        decrement counter
      </button>
      <p data-test='error-message'>{errorMessage}</p>

    </div>
  );
};

export default App;