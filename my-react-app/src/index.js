import React from "react";
import ReactDOM from "react-dom";
import Table from "./App";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);