let x = 0;

const ImpureComponent = (props: any) => {
  x = x + 1;
  const count = 0 + x;

  return (
    <>
      <h1>Impure Component</h1>
      <p>Count is {props.count}</p>
    </>
  );
};

export default ImpureComponent;
