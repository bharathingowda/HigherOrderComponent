import React from "react";
import UpdatedComponent from "../hoc/withCounter";

const HoverButton = (props) => {
  // const [count, setCounter] = useState(0);
  // const getcount = () => {
  //   setCounter(count + 1);
  // };
  return (
    <div className="App">
      <div id="page" style={{ width: "100%" }}>
        <h1
          onMouseOver={props.getcounter}
          style={{ border: "1px solid blue", display: "inline-block" }}
        >
          Mouse Hovered:{props.counter}
        </h1>
      </div>
    </div>
  );
};

export default UpdatedComponent(HoverButton);
