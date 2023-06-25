import { Fragment } from "react";
import Login from "../src/Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SignupApplicant from "./Pages/Signup/SignupApplicant";
import SignupFaculty from "./Pages/Signup/SignupFaculty";
import SignupRecruiter from "./Pages/Signup/SignupRecruiter";
import Signup from "./Pages/Signup/Signup";
import Features from "./Pages/Features/Features";
import Status from "./Pages/Status/Status";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/features' element={<Features />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/status' element={<Status />} />
        <Route path='/signup/applicant' element={<SignupApplicant />} />
        <Route path='/signup/faculty' element={<SignupFaculty />} />
        <Route path='/signup/recruiter' element={<SignupRecruiter />} />
      </Routes>
    </Router>
  );
};
export default App;
