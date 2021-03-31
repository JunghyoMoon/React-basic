import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// <App />: component. react에서 모든 것은 component와 함께 동작함.
// component: html을 반환하는 함수. (굉장히 직관적임!)
// js와 html사이의 이러한 조합을 'jsx'라고 부릅니다.
ReactDOM.render(<App />, document.getElementById("root"));
