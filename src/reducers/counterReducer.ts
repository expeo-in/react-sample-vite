const counterReducer = (state: number = 0, action: string): number => {
  if (action == "Increment") return (state += 2);
  else if (action == "Reset") return 0;
  else return state;
};

export default counterReducer;
