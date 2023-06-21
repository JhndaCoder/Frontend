import { Fragment } from "react";
import Login from "../src/Pages/Login/Login";
import SignupApplicant from "./Pages/Signup/SignupApplicant";

const App = () => {
  return (
    <Fragment>
      <h1 className='title'>Placement Portal</h1>
      <Login />
      {/* <SignupApplicant /> */}
    </Fragment>
  );
};
export default App;
