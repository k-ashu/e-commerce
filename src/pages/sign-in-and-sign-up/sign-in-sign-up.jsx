import React from "react";
import "./sign-in-sign-up.scss";
import SignIn from "../../components/sign-in/sign-in.jsx";
import SignUp from "../../components/sign-up/sign-up.jsx";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
