import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCounter] = useState(0);
    const getcount = () => {
      setCounter(count + 1);
    };
    return <OriginalComponent counter={count} getcounter={getcount} />;
  };
  return NewComponent;
};
export default UpdatedComponent;
