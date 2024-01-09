import { useQuery } from "@tanstack/react-query";
import { ToDo } from "../services/ToDoService";
import axios from "axios";
import { Post } from "../services/PostService";

const uesPostsUsingReactQuery = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });
};

export default uesPostsUsingReactQuery;
