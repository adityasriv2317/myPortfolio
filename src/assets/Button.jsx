import React from "react";
import "./button.css";

const Button = ({ data, icon, url, stl }) => {
  return <a className={`button2 ${stl} px-3 py-3`} href={url}>{icon} {data}</a>;
};

export default Button;
