import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ToDo } from "./services/ToDoService";
import uesToDoUsingReactQuery from "./hooks/useToDoUsingReactQuery";
import { useState } from "react";

const ToDoUsingReactQuery = () => {
  // const {
  //   data: todos,
  //   error,
  //   isLoading,
  // } = useQuery<ToDo[], Error>({
  //   queryKey: ["todos"],
  //   queryFn: () =>
  //     axios
  //       .get<ToDo[]>("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.data),
  // });

  const [completed, setCompleted] = useState("true");
  const { data: todos, error, isLoading } = uesToDoUsingReactQuery(completed);

  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: ToDo) =>
      axios
        .post<ToDo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      //Updating data in cache
      queryClient.setQueryData<ToDo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  return (
    <>
      <h2>ToDo Using ReactQuery</h2>
      <select onChange={(e) => setCompleted(e.target.value)}>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading Data...</p>}
      <ul>
        {todos?.map((t) => (
          <li>{t.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoUsingReactQuery;
