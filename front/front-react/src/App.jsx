import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Headbar from "./Components/Headbar/Headbar";
import MediaPlayer from "./Components/MediaPlayer/MediaPlayer";

// pages
// import Albumspage from "./Pages/Albumspage";
import Homepage from "./Pages/Homepage";

// fake data dash
import {
  userDefaultIdentif,
  userDash,
} from "./Constant/Dashboards/UserDashboard.js";
import Albumspage from "./Pages/Albumspage";
import Artistspage from "./Pages/Artistspage";

const App = () => {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="header">
          <Headbar />
        </div>
        <div class="sidebar">
          <h2 className="headbar_logo"> LOGO </h2>
          <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
        </div>
        <div class="main">
          {/* <Homepage /> */}
          {/* <Albumspage /> */}
          <Artistspage />
        </div>
        <div class="footer">
          <MediaPlayer />
        </div>
      </div>
    </div>
  );
};

export default App;
