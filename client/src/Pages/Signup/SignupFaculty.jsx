import React from "react";
import Form from "../../Components/Form/Form";
import "./Signup.css";
import background from "../../assets/homeBg.svg";

const fields = ["Name", "Phone", "Email Id", "Roll no", "Address", "Password"];
const title = "Sign up as Faculty";

const SignupFaculty = () => {
  return (
    <div
      className='signup-form-container'
      style={{
        backgroundImage: `url(${background})`,
        alignItems: "center",
      }}
    >
      <Form fields={fields} title={title} />
    </div>
  );
};

export default SignupFaculty;
