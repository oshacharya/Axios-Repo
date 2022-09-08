import React from "react";
import Child from "./Child";
import { useState } from "react";
import "../CSS/style.css";

function Parent() {
  const [arr, setArr] = useState([]);
  //  function display(args) {
  //   setArr(args);
  // }

  return (
    <>
      {/* <Child display={display} /> */}
      <Child arr={setArr} />
      <pre>
        {arr.map((arr) => {
          return (
            <p>
              {arr.userId}
              <br></br>
              {arr.id}
              <br></br>
              {arr.title}
              <br></br>
              {arr.completed}
              <br></br>
            </p>
          );
        })}
      </pre>
    </>
  );
}

export default Parent;
