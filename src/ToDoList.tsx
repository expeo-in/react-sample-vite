import { useState } from "react";
import { produce } from "immer";

const ToDoList = () => {
  const [todos, setToDos] = useState<any[]>([{ id: 1, name: "To Do 1" }]);

  const addToDo = () => {
    //mutate
    // todos.push({ id: 1, name: "Todo 1" });
    // setToDos(todos);

    let newToDos = produce(todos, (draft) => {
      draft.push({ id: 1, name: "Todo 1" });
    });
    setToDos(newToDos);

    // let newToDos = [...todos];
    // newToDos.push({ id: 1, name: "Todo 1" });

    // let newToDos = [
    //   { id: todos.length + 1, name: "Todo " + (todos.length + 1).toString() },
    //   ...todos,
    // ];

    // setToDos(newToDos);
    // console.log(newToDos);
  };

  const deleteToDo = (item: any) => {
    // let index = todos.indexOf(item);
    // todos.splice(index, 1);

    let newToDos = todos.filter((todo) => todo.id !== item.id);
    setToDos(newToDos);
  };

  const updateToDo = (id: any) => {
    // let updateToDo = todos.find(todo => todo.id == id);
    // updateToDo.name += " changed";

    let newToDos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: todo.name + " changed" } : todo
    );
    setToDos(newToDos);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <button onClick={addToDo}>Add ToDo</button>
      <ul className="list-group">
        {todos.map((item: any) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
            <button onClick={() => updateToDo(item.id)}>Update</button>
            <button onClick={() => deleteToDo(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
