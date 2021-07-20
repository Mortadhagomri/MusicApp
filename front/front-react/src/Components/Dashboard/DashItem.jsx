import React from "react";

const DashItem = ({ active, item, handleActive }) => {
  return (
    <li>
      <a
        href={item.url}
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
      </a>
    </li>
  );
};

export default DashItem;

// mainlayout

//
