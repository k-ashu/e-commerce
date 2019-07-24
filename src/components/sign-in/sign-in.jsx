import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const handleSubmit = event => {
  event.preventDefault();
  this.setState({ email: "", password: "" });
};

const handleChange = event => {
  const { value, name } = event.target;
  this.setState({ [name]: value });
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Use your email and password to sign in</span>
        <form onClick={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="Submit">SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SignIn with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
