import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import "./dots.css";

const Dots = () => {
  return (
    <div className="dots">
      <FontAwesomeIcon icon={faEllipsisH} />
    </div>
  );
};

export default Dots;
