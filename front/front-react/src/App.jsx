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

import { genres } from "./Constant/Genres/fakedatagenre";
import { allartists } from "./Constant/Artists/fakedataAllArtists";

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="header">
          <Headbar />
        </div>
        <div className="sidebar">
          <h2 className="headbar_logo"> LOGO </h2>
          <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
        </div>
        <div className="main">
          <Switch>
            {UserRoutes.map((route, index) => {
              if (route.path === "/user/genres/:id") {
                return (
                  <Route key={index} path={route.path} exact>
                    <route.component genre={genres[4]} />
                  </Route>
                );
              } else if (route.path === "/user/artists/:id") {
                return (
                  <Route key={index} path={route.path} exact>
                    <route.component artist={allartists[1]} />
                  </Route>
                );
              } else {
                return (
                  <Route key={index} path={route.path} exact>
                    <route.component />
                  </Route>
                );
              }
            })}
          </Switch>

          {/* <OneSingleGenrePage genre={genres[4]} /> */}
          {/* <OneSingleArtistPage artist={allartists[1]} /> */}
        </div>
        <div className="footer">
          <MediaPlayer />
        </div>
      </div>
    </div>
  );
};

export default App;
