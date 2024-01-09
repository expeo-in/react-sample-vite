import { Dispatch, createContext } from "react";

interface CounterContextType {
  count: number;
  dispatch: Dispatch<string>;
}

const CounterContext = createContext<CounterContextType>(
  {} as CounterContextType
);
export default CounterContext;
