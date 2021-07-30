import React from "react";
import Headbar from "../Components/Headbar/Headbar";
import Dashboard from "../Components/Dashboard/Dashboard";

import {
  userDefaultIdentif,
  userDash,
} from "../Constant/Dashboards/UserDashboard.js";
import Container from "../Components/Container/MainContainer/Container";

const Homepage = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <Headbar />
      </div>
      <div class="item2">
        <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
      </div>
      <div class="item3">
        <Container />
      </div>
      <div class="item4"> Media Player en cours </div>
    </div>
  );
};

export default Homepage;
