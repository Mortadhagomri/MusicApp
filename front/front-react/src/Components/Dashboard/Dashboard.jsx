import React, { useState } from "react";
import "./dashboard.css";
import DashItem from "./DashItem";
// import DashItemDraggable from "./DashItemDraggable";

// sfc
const Dashboard = ({ dashboard, DefaultIdentif }) => {
  const [active, setActive] = useState(DefaultIdentif);
  const handleActive = (newActive) => {
    setActive(newActive);
  };
  return (
    <nav className="dashboard">
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
