import { useSelector } from "react-redux";
import uesToDoUsingReactQuery from "./hooks/useToDoUsingReactQuery";
import uesPostsUsingReactQuery from "./hooks/usePostsUsingReactQuery";

const NavBarUsingReactQuery = () => {
  //const { data } = uesToDoUsingReactQuery();
  const { data: posts } = uesPostsUsingReactQuery();

  return (
    <>
      <h2>NavBar</h2>
      {/* {data && <p>ToDos: {data.length}</p>} */}
      {posts && <p>Posts: {posts.length}</p>}
    </>
  );
};

export default NavBarUsingReactQuery;
