import React from "react";
import Headbar from "../Components/Headbar/Headbar";
import Dashboard from "../Components/Dashboard/Dashboard";

import {
  userDefaultIdentif,
  userDash,
} from "../Constant/Dashboards/UserDashboard.js";
import Container from "../Components/Container/MainContainer/Container";
import MediaPlayer from "../Components/MediaPlayer/MediaPlayer";

const Homepage = () => {
  return (
    <div class="grid-container">
      <div class="header">
        <Headbar />
      </div>
      <div class="sidebar">
        <h2 className="headbar_logo"> LOGO </h2>
        <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
      </div>
      <div class="main">
        <Container />
      </div>
      <div class="footer">
        <MediaPlayer />
      </div>
    </div>
  );
};

export default Homepage;
