import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter";
import RandomNumberGenerator from "./random";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Counter />
    <RandomNumberGenerator/>
  </div>
);

