import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "../components/Hello";

console.log("start");
ReactDOM.render(
    <Hello compiler="compiler" framework="framework" />,
    document.getElementById("example")
);