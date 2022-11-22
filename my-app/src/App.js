import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);

  function dummyCalculation(a, b) {
    if (a > b) {
      setResult((a + b) * 2);
    }
    setResult(a + b);
  }

  useEffect(() => {
    if (result !== 0) {
      setCount(count + 1);
    }
  }, [result]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dummyCalculation(14, 6)}>Test1</button>
        <button onClick={() => dummyCalculation(4, 6)}>Test2</button>
        <div id="trackResult">{result}</div>

        {(count > 5) ?
          <div id="stopit">Stop it...</div> :
          <div id="goahead">Go ahead</div>
        }

      </header>
    </div>
  );
}

export default App;
