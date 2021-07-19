import React from "react";
import { NavLink, Router } from "react-router-dom";

const DashItem = ({ active, item, handleActive }) => {
  return (
    <div>
      <li>
        <a
          href={item.url}
          className={`dashboard__item  ${active && "dashboard__item--active"}`}
          onClick={() => handleActive(item.identif)}
        >
          <item.Icon
            className={`dashboard__icon  ${
              active && "dashboard__icon--active"
            }`}
          />
          <span
            className={`dashboard__link  ${
              active && "dashboard__link--active"
            }`}
          >
            {item.name}
          </span>
        </a>
      </li>

      {/* <NavLink
        to={item.url}
        className={`dashboard__item  ${active && "dashboard__item--active"}`}
        onClick={() => handleActive(item.identif)}
      >
        <item.Icon
          className={`dashboard__icon  ${active && "dashboard__icon--active"}`}
        />
        <span
          className={`dashboard__link  ${active && "dashboard__link--active"}`}
        >
          {item.name}
        </span>
      </NavLink> */}
    </div>
  );
};

export default DashItem;
