import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className='signup-form-container'>
      <Link to='/signup/applicant'>
        <div className='box'>
          <h3>Applicant</h3>
        </div>
      </Link>
      <Link to='/signup/faculty'>
        <div className='box'>
          <h3>Faculty</h3>
        </div>
      </Link>
      <Link to='/signup/recruiter'>
        <div className='box'>
          <h3>Recruiter</h3>
        </div>
      </Link>
    </div>
  );
}

export default Signup;
