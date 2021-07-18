import "./App.css";
import React from "react";
import Headbar from "./Components/Headbar/Headbar";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Headbar />
      <Dashboard />
    </div>
  );
};

export default App;
