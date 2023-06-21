import React from "react";
import Form from "../../Components/Header/Form/Form";
import "./Signup.css";

const fields = ["Name", "Phone", "Email Id", "Company", "Address", "Password"];
const title = "Sign up as Recruiter";

const Signup = () => {
  return (
    <div className='form-container'>
      <Form fields={fields} title={title} />
    </div>
  );
};

export default Signup;
