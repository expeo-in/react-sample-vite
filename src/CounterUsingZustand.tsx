import useCounterStore from "./zustand-store";

const CounterUsingZustand = () => {
  const { counter, increment, reset } = useCounterStore();
  return (
    <>
      <h2>Counter Using Zustand</h2>
      <p>{counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default CounterUsingZustand;
