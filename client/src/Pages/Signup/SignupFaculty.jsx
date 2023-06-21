import React from "react";
import Form from "../../Components/Header/Form/Form";
import "./Signup.css";

const fields = ["Name", "Phone", "Email Id", "Roll no", "Address", "Password"];
const title = "Sign up as Faculty";

const Signup = () => {
  return (
    <div className='form-container'>
      <Form fields={fields} title={title} />
    </div>
  );
};

export default Signup;
