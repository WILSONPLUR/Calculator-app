import {useState} from "react";
import './App.css';

function App() {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult((val) => val + e.target?.name)
    }
    const resetResult = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calc = () => {
        try  {
            setResult(Number(eval(result)).toFixed(2))
        }catch (e) {
            setResult("Invalid format! ")
        }
    }
  return (
    <div className="container">
      <div className="calculator">
          <input value={result} className="calc-numbers" />
          <div className="calculator-buttons">
              <button
                  onClick={resetResult}
                  name="C"
                  className="btn btn-clear span-2"
              >
                  C
              </button>
              <button onClick={backspace} name="back" className="btn orange">
                  &larr;
              </button>
              <button onClick={handleClick} name="/" className="btn orange">
                  /
              </button>
              <button onClick={handleClick} name="7" className="btn">
                  7
              </button>
              <button onClick={handleClick} name="8" className="btn">
                  8
              </button>
              <button onClick={handleClick} name="9" className="btn">
                  9
              </button>
              <button onClick={handleClick} name="*" className="btn orange">
                  *
              </button>
              <button onClick={handleClick} name="4" className="btn">
                  4
              </button>
              <button onClick={handleClick} name="5" className="btn">
                  5
              </button>
              <button onClick={handleClick} name="6" className="btn">
                  6
              </button>
              <button onClick={handleClick} name="-" className="btn orange">
                  -
              </button>
              <button onClick={handleClick} name="1" className="btn">
                  1
              </button>
              <button onClick={handleClick} name="2" className="btn">
                  2
              </button>
              <button onClick={handleClick} name="3" className="btn">
                  3
              </button>
              <button onClick={handleClick} name="+" className="btn orange">
                  +
              </button>
              <button onClick={handleClick} name="0" className="btn">
                  0
              </button>
              <button onClick={calc} name="=" className="btn orange">
                  =
              </button>
          </div>
      </div>
    </div>
  );
}

export default App;
