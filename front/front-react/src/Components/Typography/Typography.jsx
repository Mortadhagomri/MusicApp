import React from "react";
import "./typography.css";

const Typography = ({ name, className }) => {
  return <span className={className}> {name} </span>;
};

export default Typography;
