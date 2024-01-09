import { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";
import CounterContext from "./CounterContext";

const CounterProvider = (props: any) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <CounterContext.Provider value={{ count, dispatch }}>
        {props.children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterProvider;
