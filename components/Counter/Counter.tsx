import { useState } from "react";

type CounterProps = {
  description: string;
  defaultCount: number;
};

export function Counter({ defaultCount, description }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor
        <input
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(parseInt(e.target.value, 10) || 0)}
        />
      </label>
      <button
        aria-label="Decrement Counter"
        onClick={() => setCount((value) => value - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Increment Counter"
        onClick={() => setCount((value) => value + incrementor)}
      >
        +
      </button>
    </>
  );
}
