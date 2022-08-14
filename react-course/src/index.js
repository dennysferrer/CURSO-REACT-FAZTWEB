import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function Add(x, y) {
    return x + y;
  }
  return (
      <h1>{Add(10, 20)}</h1>
  );
}

root.render(<>
  <Greeting/>
  <Greeting/>
</>
  
);
