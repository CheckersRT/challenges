import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  function handleCountIncrease() {
    setCounter(counter + 1);
  }

  function handleCountDecrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleCountIncrease}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleCountDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
