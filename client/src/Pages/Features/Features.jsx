import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className='features-form-container'>
      <Link to='/'>
        <div className='box'>
          <h3>HR COMMUNICATION</h3>
        </div>
      </Link>
      <Link to='/'>
        <div className='box'>
          <h3>SLOT ALLOTMENT</h3>
        </div>
      </Link>
      <Link to='/'>
        <div className='box'>
          <h3>MONITORING MGT.</h3>
        </div>
      </Link>
      <Link to='/'>
        <div className='box'>
          <h3>EVALUATION</h3>
        </div>
      </Link>
    </div>
  );
}

export default Features;
