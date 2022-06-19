import React from "react";

const ColorfulMes = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontsize: "20px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMes;
