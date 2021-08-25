import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

// fake data dash
import {
  userDefaultIdentif,
  userDash,
} from "./Constant/Dashboards/UserDashboard.js";
import { UserRoutes } from "./Constant/routes";

import Dashboard from "./Components/Dashboard/Dashboard";
import Headbar from "./Components/Headbar/Headbar";
import MediaPlayer from "./Components/MediaPlayer/MediaPlayer";
import OneSingleGenrePage from "./Pages/Genres/OneSingleGenrePage";

import { genres } from "./Constant/Genres/fakedatagenre";
import OneSingleArtistPage from "./Pages/Artists/OneSingleArtistPage";
import { allartists } from "./Constant/Artists/fakedataAllArtists";

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
          {/* <Switch>
            {UserRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact>
                <route.component />
              </Route>
            ))}
          </Switch> */}
          {/* <OneSingleGenrePage genre={genres[4]} /> */}
          <OneSingleArtistPage artist={allartists[1]} />
        </div>
        <div class="footer">
          <MediaPlayer />
        </div>
      </div>
    </div>
  );
};

export default App;
