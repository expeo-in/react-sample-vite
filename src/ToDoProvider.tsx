import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";
import ToDoContext from "./ToDoContext";

const ToDoProvider = (props: any) => {
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  return (
    <ToDoContext.Provider value={{ todos, todoDispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
