import { Fragment, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import List from "./List";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import Customer from "./Customer";
import ProductCatalog from "./ProductCatalog";
import NavBar from "./NavBar";
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import RegisterFormUsingState from "./RegisterFormUsingState";
import RegisterFormUsingRHF from "./RegisterFormUsingRHF";
import RegisterFormUsingZod from "./RegisterFormUsingZod";
import RegisterFormUsingYup from "./RegisterFormUsingYup";
import ImpureComponent from "./ImpureComponent";
import PostList from "./PostList";
import ToDoListNew from "./ToDoListNew";
import CounterNew from "./CounterNew";
import counterReducer from "./reducers/counterReducer";
import CounterContext from "./CounterContext";
import NavBarNew from "./NavBarNew";
import ToDoContext from "./ToDoContext";
import todoReducer from "./reducers/todoReducer";
import CounterProvider from "./CounterProvider";
import ToDoProvider from "./ToDoProvider";
import { Provider } from "react-redux";
import reduxStore from "./redux/redux-store";
import CounterUsingRedux from "./CounterUsingRedux";
import NavBarUsingRedux from "./NavBarUsingRedux";
import CounterUsingZustand from "./CounterUsingZustand";
import NavBarUsingZustand from "./NavBarUsingZustand";
import ToDoUsingReactQuery from "./ToDoUsingReactQuery";
import NavBarUsingReactQuery from "./NavBarUsingReactQuery";
import Globalization from "./Globalization";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import PostDetail from "./PostDetail";

function App() {
  const [cart, setCart] = useState<any>([]);
  const [locale, setLocale] = useState("en");
  //const [count, dispatch] = useReducer(counterReducer, 0);
  //const [todos, todoDispatch] = useReducer(todoReducer, []);

  const handleAddToCart = (product: any) => {
    let newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  };

  const today = new Date();
  //const todos = ["todo 1", "todo 2", "todo 3"];
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  const customers = [
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
    { id: 3, name: "Customer 3" },
  ];

  const getMessage = () => {
    return <p>Hi</p>;
  };

  let greet;
  if (today.getHours() <= 12) greet = <p>Good morning</p>;
  else greet = <p>Good Evening</p>;

  const getGreetings = () => {
    let hours = today.getHours();
    if (hours <= 12) return <p>Good morning</p>;
    else if (hours > 12 && hours <= 16) return <p>Good Afternoon</p>;
    else return <p>Good Evening</p>;
  };

  const handleClick = (e: React.MouseEvent) => {
    console.log("click handled", e);
  };

  const handleToDoClick = (item: string) => {
    console.log(item);
  };

  // const [filter, setFilter] = useState("");

  return (
    <>
      {/* <h1>React</h1>
      <h2>Dynamic Data</h2>
      <p>React samples</p>
      <p id="p1">{today.toDateString()}</p>
      <p>{2 + 3}</p>
      {getMessage()}

      <h2>Conditional</h2>
      <div>Using variable: {greet}</div>
      <div>
        Using ternary:{" "}
        {today.getHours() <= 12 ? "Good Morning" : "Good Evening"}
      </div>
      <div>Using function: {getGreetings()}</div>
      <div>Using logical and: {today.getHours() > 12 && "Good Evening"}</div>

      <hr></hr>

      <h2>Rendering List</h2>
      <ul>
        {todos.map((item) => (
          <li key={item} onClick={() => handleToDoClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <ul className="list-group">
        {products.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => console.log(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <hr></hr>
      <h2>Event Handling</h2>
      <button onClick={() => console.log("button clicked")}>
        Button Using Inline
      </button>
      <button onClick={handleClick}>Button Using Named</button>
      <button onClick={(event) => console.log(event)}>
        Button Access Event
      </button>

      <hr></hr>
      <List
        items={products}
        heading="List of Products"
        onItemClick={(item: any) => console.log("product item clicked", item)}
      ></List>
      <List
        items={customers}
        heading="Customers"
        onItemClick={() => console.log("customer clicked")}
      ></List>

      <hr></hr>
      <h2>State</h2>
      <Counter></Counter>
      <ToDoList></ToDoList>
      <Customer></Customer> */}
      {/* <Header></Header> */}
      {/* <NavBar cartCount={cart.length}></NavBar>
      <ProductCatalog onAddToCart={handleAddToCart}></ProductCatalog> */}
      <hr></hr>
      {/* <RegisterForm></RegisterForm> */}
      {/* <RegisterFormUsingState></RegisterFormUsingState> */}
      {/* <h2 className="main-head">Another Heading</h2> */}
      {/* <RegisterFormUsingRHF></RegisterFormUsingRHF> */}
      {/* <RegisterFormUsingZod></RegisterFormUsingZod> */}
      {/* <RegisterFormUsingYup></RegisterFormUsingYup> */}

      {/* <ImpureComponent count={1}></ImpureComponent>
      <ImpureComponent count={2}></ImpureComponent>
      <ImpureComponent count={1}></ImpureComponent> */}

      {/* <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select> */}

      {/* <PostList completed={filter}></PostList> */}

      {/* <hr></hr> */}

      {/* <PostList></PostList> */}

      {/* <TasksContext.Provider value={{ tasks, dispatch }}>
    <NavBar></NavBar>
    <HomePage></HomePage>
  </TasksContext.Provider> */}

      {/* <CounterProvider>
        <ToDoProvider>
          <NavBarNew></NavBarNew>
          <CounterNew></CounterNew>
          <ToDoListNew></ToDoListNew>
        </ToDoProvider>
      </CounterProvider> */}

      {/* <Provider store={reduxStore}>
        <NavBarUsingRedux></NavBarUsingRedux>
        <CounterUsingRedux></CounterUsingRedux>
      </Provider> */}

      {/* <NavBarUsingZustand></NavBarUsingZustand>
      <CounterUsingZustand></CounterUsingZustand> */}

      {/* <NavBarUsingReactQuery></NavBarUsingReactQuery>
      <ToDoUsingReactQuery></ToDoUsingReactQuery> */}
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <select
          name="locale"
          id="locale"
          onChange={(e) => setLocale(e.target.value)}
          value={locale}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spain</option>
          <option value="te">Telugu</option>
        </select>
        <p>You have choosed - {locale}</p>
        <Globalization></Globalization>

        <PostDetail locale={locale} name="react-intro"></PostDetail>
      </IntlProvider>
    </>
  );
}

export default App;
