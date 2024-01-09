import { useState } from "react";

// function declartion
// function Counter() {
//     return <h1>Counter</h1>;
// }

// function expression
// const Counter = function() {

// }

const Counter = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("siva");
  //   console.log(state);

  //   let count = 0;

  const handleIncrement = () => {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1);
    setName("siva kumar");
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
      <p>{name}</p>
    </>
  );
};

export default Counter;
