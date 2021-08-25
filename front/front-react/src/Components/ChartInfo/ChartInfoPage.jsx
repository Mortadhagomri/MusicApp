import React, { useState } from "react";

import UserDefaultAvatar from "../../Assets/svgs/User/UserDefaultAvatar";
import Typography from "../Typography/Typography";
import "./chartinfopage.css";

const ChartInfoPage = ({
  title,
  classNameTitle,
  subtitle,
  classNameSubtitle,
}) => {
  return (
    <div className="info_container">
      <div className="info_container_image">
        <UserDefaultAvatar />
      </div>
      <div className="info_container_titles">
        <Typography name={title} className={classNameTitle} />
        <Typography name={subtitle} className={classNameSubtitle} />
      </div>
    </div>
  );
};

export default ChartInfoPage;
