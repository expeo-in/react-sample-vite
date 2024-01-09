import { useEffect, useState } from "react";
import axiosInstance from "./services/api-client";
import postService, { Post } from "./services/PostService";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postService.getAll().then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
