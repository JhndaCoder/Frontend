import React from "react";
import "./Status.css";
import Box from "../../Components/Box/Box";

const boxStyle = {
  width: "173px",
  height: "117px",
  borderRadius: "60px",
  border: "5px solid #fff",
  backgroundColor: "rgba(218, 18, 18, 1)",
};

const textStyle = {
  color: "white",
};

const Status = () => {
  return (
    <div className='status-container'>
      <div className='row'>
        <Box text='Submitted' boxStyle={{ margin: "flex-start" }} />
        <Box text='Verified by HR' />
        <Box
          text='call for 
  Interview'
        />
      </div>

      <div className='row' style={{ justifyContent: "center" }}>
        <div className='progress-bar'></div>
        <Box boxStyle={boxStyle} textStyle={textStyle} text='ACCEPTED' />
      </div>

      <div className='row'>
        <Box
          text='Verified by
faculty'
        />
        <Box
          text='Undergoing
evaluation '
        />
      </div>
    </div>
  );
};

export default Status;
