import React from "react";
import Form from "../../Components/Form/Form";
import "./Signup.css";

const fields = ["Name", "Phone", "Email Id", "Company", "Address", "Password"];
const title = "Sign up as Recruiter";

const SignupRecruiter = () => {
  return (
    <div className='signup-form-container'>
      <Form fields={fields} title={title} />
    </div>
  );
};

export default SignupRecruiter;
