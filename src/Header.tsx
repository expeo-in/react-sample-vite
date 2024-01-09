// import "./Header.css";
import styles from "./Header.module.css";
//import MainHead from "./HeaderStyles";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    // normal external style
    // <h1 className="main-head">Header Component</h1>

    // css modules
    // <h1 className={styles["main-head"]}>Header Component</h1>
    <div>
      <h1 className={styles.mainHead}>Header Component</h1>

      <BsFillBellFill color="pink" size="100"></BsFillBellFill>
    </div>

    // css in js
    // <MainHead>Header Component</MainHead>

    //inline styles
    // <h1
    //   style={{
    //     backgroundColor: "lightblue",
    //     color: "orange",
    //   }}
    // >
    //   Header Component
    // </h1>
  );
};

export default Header;
