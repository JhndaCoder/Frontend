import React from "react";
import Form from "./../../Components/Form/Form";
import "./Signup.css";

const fields = ["Name", "Phone", "Email Id", "Roll No", "Address", "Password"];
const title = "Sign up as Applicant";
const btnValue = "Sign up";

const SignupApplicant = () => {
  return (
    <div className='signup-form-container'>
      <Form fields={fields} title={title} btnValue={btnValue} />
    </div>
  );
};

export default SignupApplicant;
