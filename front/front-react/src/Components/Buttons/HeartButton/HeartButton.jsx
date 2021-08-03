import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./heart.css";

const HeartButton = () => {
  const [toggle, setToggle] = useState(false);

  const handleToogle = () => {
    setToggle(!toggle);
  };

  return (
    <FontAwesomeIcon icon={faHeart} className="Heart" onClick={handleToogle} />
  );
};

export default HeartButton;
