import ApiClient from "./api-client";
import { axiosInstance } from "./api-client";

//const toDoService = new ApiClient("/todos");

//export default toDoService;

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export default class ToDoService extends ApiClient<ToDo> {
  constructor() {
    super("todos");
  }

  getByStatus(status: string) {
    return axiosInstance.get(this.endpoint + "?completed" + status);
  }
}
