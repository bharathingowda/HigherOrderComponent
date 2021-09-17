import React from "react";
import UpdatedComponent from "../hoc/withCounter";

const ClickCounter = (props) => {
  // const [count, setCounter] = useState(0);
  // const getcount = () => {
  //   setCounter(count + 1);
  // };
  return (
    <div className="App">
      <h2>{props.name}</h2>
      <button onClick={props.getcounter}>click to count {props.counter}</button>
      <br />
    </div>
  );
};
export default UpdatedComponent(ClickCounter);
