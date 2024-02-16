import React from "react";
import { data } from "./App";

const ChildC = (props) => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <h1>Name in child component C is {name} through context Api</h1>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
