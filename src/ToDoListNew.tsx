import axios from "axios";
import { useEffect, useState, useRef, useContext, useReducer } from "react";
import ToDoService from "./services/ToDoService";
import useToDos from "./hooks/useToDos";
import { ToDo } from "./services/ToDoService";
import todoReducer from "./reducers/todoReducer";
import ToDoContext from "./ToDoContext";

const ToDoListNew = (props: any) => {
  //const [todos, dispatch] = useReducer(todoReducer, []);
  const { todos, todoDispatch: dispatch } = useContext<any>(ToDoContext);

  const {
    todos: initialState,
    error,
    isLoading,
    setToDos,
    setError,
  } = useToDos(dispatch);

  const [completed, setCompleted] = useState("");
  //const completed = props.completed;
  console.log("completed prop", completed);
  const inputRef = useRef<HTMLInputElement>(null);

  const toDoService = new ToDoService();

  const onAdd = () => {
    if (inputRef.current) {
      let originalToDos = todos;

      let newToDo = {
        id: 0,
        userId: 1,
        title: inputRef.current.value,
        completed: false,
      };

      //setToDos([newToDo, ...todos]);
      dispatch({ type: "ADD", payload: newToDo });

      toDoService
        .create(newToDo)
        .then((res) => console.log(res.data))
        .catch((error) => setToDos(originalToDos));
    }
  };

  const onUpdate = (item: ToDo) => {
    let originalToDos = todos;
    let updatedToDo = { ...item, title: item.title + "  changed" };

    //setToDos(todos.map((t) => (t.id === item.id ? updatedToDo : t)));
    dispatch({ type: "UPDATE", payload: item });

    toDoService
      .update(updatedToDo)
      .then((res) => {})
      .catch((err) => {
        setToDos(originalToDos);
        setError(err);
      });
  };

  const onDelete = (id: number) => {
    let originalToDos = todos;

    //setToDos(todos.filter((t) => t.id !== id));
    dispatch({ type: "DELETE", payload: id });

    toDoService
      .delete(id)
      .then((res) => {})
      .catch((error) => {
        setError(error);
        setToDos(originalToDos);
      });
  };

  return (
    <>
      <h1>ToDo Lists</h1>

      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <select onChange={(e) => setCompleted(e.target.value)}>
        <option value="">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>

      <div>
        <input type="text" className="form-control" ref={inputRef}></input>
        <button className="btn btn-primary" onClick={onAdd}>
          Add
        </button>
      </div>

      {error && <p className="alert alert-danger">{error.message}</p>}
      {!error && todos.length == 0 && <p>No records</p>}
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.title} - {item.completed.toString()}
            <button
              className="btn btn-primary me-3"
              onClick={() => onUpdate(item)}
            >
              Update
            </button>
            <button
              className="btn btn-primary"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoListNew;
