import React from "react";
import "./Box.css";

const Box = ({ text, boxStyle, textStyle }) => {
  return (
    <div className='box' style={boxStyle && boxStyle}>
      <h3 style={textStyle && textStyle}>{text}</h3>
    </div>
  );
};

export default Box;
