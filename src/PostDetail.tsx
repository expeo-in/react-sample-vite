import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = (props: any) => {
  const [post, setPost] = useState<any>({ title: "", body: "" });

  useEffect(() => {
    axios
      .get(
        `https://localhost:7202/api/Posts?name=${props.name}&lang=${props.locale}`
      )
      .then((res) => setPost(res.data));
  }, [props.locale]);

  return (
    <>
      <h2>Post Details</h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetail;
