import ApiClient from "./api-client";
import axiosInstance from "./api-client";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default new ApiClient<Post>("/posts");
