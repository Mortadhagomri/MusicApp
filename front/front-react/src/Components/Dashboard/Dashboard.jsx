import React, { useState } from "react";
import "./dashboard.css";
import DashItem from "./DashItem";

// sfc
const Dashboard = ({ dashboard, DefaultIdentif }) => {
  const [active, setActive] = useState(DefaultIdentif);
  const handleActive = (newActive) => {
    setActive(newActive);
  };
  return (
    <nav className="dashboard">
      <div className="title">
        <span>Music</span>
      </div>
      <ul className="dashboard__list">
        {dashboard.map((item, index) => (
          <DashItem
            key={index}
            item={item}
            active={active === item.identif}
            handleActive={handleActive}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Dashboard;
