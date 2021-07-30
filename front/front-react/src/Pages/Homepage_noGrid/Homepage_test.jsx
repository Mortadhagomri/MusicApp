import React from "react";

import Headbar from "../../Components/Headbar/Headbar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Container from "../../Components/Container/MainContainer/Container";

import {
  userDefaultIdentif,
  userDash,
} from "../../Constant/Dashboards/UserDashboard.js";

import "./homepage.css";

const Homepage = () => {
  return (
    <div className="App_home">
      <Headbar />
      <div className="main__app_home">
        <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
        <Container />
      </div>
    </div>
  );
};

export default Homepage;
