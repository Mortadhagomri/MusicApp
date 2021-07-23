import React from "react";
import "./App.css";

import Headbar from "./Components/Headbar/Headbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Container from "./Components/Container/Container";

import {
  userDefaultIdentif,
  userDash,
} from "./Constant/Dashboards/UserDashboard.js";

const App = () => {
  return (
    <div className="App">
      <Headbar />
      <div className="main__app">
        <Dashboard dashboard={userDash} />

        <Container />
      </div>
    </div>
  );
};

export default App;
