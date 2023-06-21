import React from "react";
import Form from "../../Components/Header/Form/Form";
import "./Signup.css";

const fields = ["Name", "Phone", "Email Id", "Roll No", "Address", "Password"];
const title = "Sign up as Applicant";
const btnValue = "Sign up";

const Signup = () => {
  return (
    <div className='form-container'>
      <Form fields={fields} title={title} btnValue={btnValue} />
    </div>
  );
};

export default Signup;
