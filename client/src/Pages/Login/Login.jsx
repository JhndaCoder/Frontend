import React from "react";
import Form from "../../Components/Form/Form";
import "./Login.css";
import background from "../../assets/homeBg.svg";

const fields = ["Email Id", "Password"];
const title = "Login";
const btnValue = "Login";

const Login = () => {
  return (
    <div className='login-form-container'>
      <Form fields={fields} title={title} btnValue={btnValue}>
        <a href=''>Forget Password?</a>
      </Form>
    </div>
  );
};

export default Login;
