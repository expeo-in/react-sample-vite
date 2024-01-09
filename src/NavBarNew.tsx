import { useContext } from "react";
import CounterContext from "./CounterContext";
import ToDoContext from "./ToDoContext";

const NavBarNew = () => {
  const { count } = useContext(CounterContext);
  const { todos } = useContext<any>(ToDoContext);
  return (
    <>
      <h2>NavBar</h2>
      <p>Count: {count}</p>
      <p>ToDo Count: {todos.length}</p>
    </>
  );
};

export default NavBarNew;
