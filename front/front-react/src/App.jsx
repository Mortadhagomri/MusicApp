import "./App.css";
import React from "react";
import Headbar from "./Components/Headbar/Headbar";
import Dashboard from "./Components/Dashboard/Dashboard";

import {
  userDefaultIdentif,
  userDash,
} from "./Constant/Dashboards/UserDashboard.js";

const App = () => {
  return (
    <div className="App">
      <Headbar />
      <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
    </div>
  );
};

export default App;
