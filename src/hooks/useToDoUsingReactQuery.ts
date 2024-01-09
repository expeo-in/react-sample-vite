import { useQuery } from "@tanstack/react-query";
import { ToDo } from "../services/ToDoService";
import axios from "axios";

const uesToDoUsingReactQuery = (completed: string = "true") => {
  return useQuery<ToDo[], Error>({
    queryKey: ["todos", completed],
    queryFn: () =>
      axios
        .get<ToDo[]>("https://jsonplaceholder.typicode.com/todos", {
          params: {
            completed,
          },
        })
        .then((res) => res.data),
  });
};

export default uesToDoUsingReactQuery;
