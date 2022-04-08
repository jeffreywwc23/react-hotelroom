import React, { useState, createRef } from "react";
import "./SignUp.css";
import {
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoTwitter,
  IoIosEye,
  IoIosEyeOff,
} from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const [isRevealConfirmPassword, setIsRevealConfirmPassword] = useState(false);

  const passwordOneRef = createRef();
  const passwordTwoRef = createRef();
  const iconRevealPassword = createRef();

  const togglePassword = (type) => {
    if (type === "password") {
      setIsRevealPassword(!isRevealPassword);
    } else {
      setIsRevealConfirmPassword(!isRevealConfirmPassword);
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-wrapper">
        <div className="sign-up-left">
          <h1>Already Have An Account?</h1>
          <p>Sign in to get up-to-date information!</p>
          <Link to="/">
            <button className="sign-up-btn">Sign In</button>
          </Link>
        </div>

        <div className="sign-up-right">
          <h1>Sign Up</h1>

          <form>
            <div id="name-inputs">
              <div className="fname-input">
                <label htmlFor="fname">First Name</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  placeholder="Your first name"
                  className="fname"
                />
              </div>

              <div className="lname-input">
                <label htmlFor="lname">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lname"
                  placeholder="Your last name"
                  className="lname"
                />
              </div>
            </div>

            <div id="email-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>

            <div id="password-inputs">
              <label htmlFor="password">Password</label>
              <div className="password">
                <input
                  id="password"
                  type={isRevealPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={passwordOne}
                  onChange={(e) => setPasswordOne(e.target.value)}
                  ref={passwordOneRef}
                />
                <span
                  onClick={() => togglePassword("password")}
                  ref={iconRevealPassword}
                >
                  {isRevealPassword ? (
                    <IoIosEye className="eye" />
                  ) : (
                    <IoIosEyeOff className="eye" />
                  )}
                </span>
              </div>

              <label htmlFor="password">Confirmed Password</label>
              <div className="password">
                <input
                  id="confirmedPassword"
                  type={isRevealConfirmPassword ? "text" : "password"}
                  name="confirmedPassword"
                  placeholder="Enter your comfirmed password"
                  value={passwordTwo}
                  onChange={(e) => setPasswordTwo(e.target.value)}
                  ref={passwordTwoRef}
                />
                <span
                  onClick={() => togglePassword("confirmPassword")}
                  ref={iconRevealPassword}
                >
                  {isRevealConfirmPassword ? (
                    <IoIosEye className="eye" />
                  ) : (
                    <IoIosEyeOff className="eye" />
                  )}
                </span>
              </div>
            </div>

            <Link to="/">
              <button className="sign-up-btn">sign up</button>
            </Link>
          </form>

          <p className="sign-up-social-title">Or Sign Up By Using</p>
          <div className="social-sign-up-icons-group">
            <button type="submit" className="social-single-sign-up">
              <IoLogoGoogle className="social-icons" />
            </button>
            <button type="submit" className="social-single-sign-up">
              <IoLogoFacebook className="social-icons" />
            </button>
            <button type="submit" className="social-single-sign-up">
              <IoLogoTwitter className="social-icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
