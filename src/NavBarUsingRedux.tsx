import { useSelector } from "react-redux";

const NavBarUsingRedux = () => {
  const count = useSelector((state: any) => state.counter.value);

  return (
    <>
      <h2>NavBAr</h2>
      <p>Count: {count}</p>
    </>
  );
};

export default NavBarUsingRedux;
