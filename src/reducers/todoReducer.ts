import { ToDo } from "../services/ToDoService";

interface AddToDoAction {
  type: "ADD";
  payload: ToDo;
}

interface UpdateToDoAction {
  type: "UPDATE";
  payload: ToDo;
}

interface DeleteToDoAction {
  type: "DELETE";
  payload: number;
}

interface LoadToDoAction {
  type: "LOAD";
  payload: ToDo[];
}

// interface Action {
//     type: string;
//     payload: any;
// }

// interface Action {
//     type: string;
//     payload: ToDo | number;
// }

type Action =
  | AddToDoAction
  | UpdateToDoAction
  | DeleteToDoAction
  | LoadToDoAction;

//add todo
//update todo
//delete id

const todoReducer = (todos: ToDo[], action: Action): ToDo[] => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "ADD":
      return [action.payload, ...todos];
    case "UPDATE":
      return todos.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    case "DELETE":
      return todos.filter((t) => t.id !== action.payload);
    default:
      return todos;
  }
};

export default todoReducer;
