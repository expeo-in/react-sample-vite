import { useEffect, useState } from "react";
import ToDoService, { ToDo } from "../services/ToDoService";

const toDoService = new ToDoService();

const useToDos = (dispatch: any) => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    toDoService
      .getAll()
      .then((res) => {
        setToDos(res.data);
        setLoading(false);
        dispatch({ type: "LOAD", payload: res.data });
      })
      .catch((error) => setError(error));
  }, []);

  return { todos, error, isLoading, setToDos, setError };
};

export default useToDos;
