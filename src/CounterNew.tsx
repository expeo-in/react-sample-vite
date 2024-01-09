import { useContext, useReducer, useState } from "react";
import counterReducer from "./reducers/counterReducer";
import CounterContext from "./CounterContext";

const CounterNew = () => {
  //const [count, setCount] = useState(0);
  //const [count, dispatch] = useReducer(counterReducer, 0);
  const { count, dispatch } = useContext(CounterContext);

  return (
    <>
      <h1>Counter New</h1>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </>
  );
};

export default CounterNew;
