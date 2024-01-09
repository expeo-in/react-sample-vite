import useCounterStore from "./zustand-store";

const NavBarUsingZustand = () => {
  const { counter } = useCounterStore();

  return (
    <>
      <h2>NavBar</h2>
      <p>Count: {counter}</p>
    </>
  );
};

export default NavBarUsingZustand;
