import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Infoonhover from "./Infoonhover";

function Signup() {
  let eye = "fa-solid fa-eye";
  let passwordortext = "password";

  const [passwordToggle, setpasswordToggle] = useState(false);

  const handelClick = () => {
    setpasswordToggle(!passwordToggle);
  };
  if (passwordToggle) {
    eye = "fa-solid fa-eye-slash";
    passwordortext = "text";
  }
  // sign up autho
  let userData = false;
  const navigate = useNavigate();

  let error_msg = "";
  const [SignupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    pAp: false,
  });
  function userSignUp() {
    axios({
      method: "POST", // Change from GET to POST
      url: "http://127.0.0.1:5001/signup",
      data: {
        name: SignupForm.name,
        email: SignupForm.email,
        phone: SignupForm.phone,
        password: SignupForm.password,
        terms_and_conditions: SignupForm.pAp,
        address: "",
      },
    })
      .then((response) => {
        console.log(response);
        alert("SignUp sucessfully");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status === 405) {
            alert("Invalid cerdentional");
          }
        }
      });
  }

  function handelChangedata(event) {
    const { value, name, type, checked } = event.target;
    setSignupForm((prevNote) => ({
      ...prevNote,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  // user data validation
  if (SignupForm.name.length <= 4) {
    error_msg = "Name must be at least 5 characters.";
  } else if (SignupForm.phone.length !== 14) {
    error_msg = "Enter a valid phone number. with country code example in i";
  } else if (!SignupForm.email) {
    error_msg = "Email is required.";
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(SignupForm.email)) {
      error_msg = "Enter a valid email.";
    } else if (SignupForm.password.length < 8) {
      error_msg = "Password must be at least 8 characters.";
    } else if (!SignupForm.pAp) {
      error_msg = "Accept terms and policies.";
    } else {
      userData = true;
    }
  }

  console.log(SignupForm.name);
  console.log(SignupForm.password);
  console.log(SignupForm.email);
  console.log(SignupForm.pAp);
  console.log(userData);

  return (
    <>
      <div className="SignupformContainer">
        <input className="error_message" value={error_msg} readOnly />
        <div className="Signupformwrapper">
          <h2>Sign-up</h2>
          <div className="SignupformStyleControl">
            <form className="Signupform">
              <div className="formcontainer-row">
                <label for="name">Your name</label>
                <input onChange={handelChangedata} type="text" name="name" required />
              </div>
              <div className="formcontainer-row">
                <label for="phone">Phone Number</label>
                <input onChange={handelChangedata} type="text" name="phone" required />
                <Infoonhover infoclassname={"phoneInfo"} info_message={"example country code and add 0 and your number 1234567899"} />
              </div>
              <div className="formcontainer-row">
                <label for="email">E-mail</label>
                <input onChange={handelChangedata} type="email" name="email" required />
              </div>
              <div className="formcontainer-row">
                <label for="password">Password</label>
                <input onChange={handelChangedata} className="pass" type={passwordortext} name="password" />
                <i onClick={handelClick} className={eye}></i>
                <Infoonhover infoclassname={"passwordInfo"} info_message={"password length must be 8"} />
              </div>
              <div className="formcontainer-row">
                <div className="SignupformFormet">
                  <lable for="pAp">
                    <input onChange={handelChangedata} className="checkBox" type="checkbox" name="pAp" />
                    <Link className="formsLinks" to={"/privacy&policy&terms&comditions"}>
                      Privacy Policy{" "}
                    </Link>
                    &
                    <Link className="formsLinks" to={"/privacy&policy&terms&comditions"}>
                      Terms and Conditions
                    </Link>
                  </lable>
                  <div className="formchanger">
                    Have a Account? <Link to={"/login"}>Login</Link>
                  </div>
                </div>
                <div className="SignupBtn">
                  <button type="button" disabled={userData ? false : true} onClick={userSignUp}>
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
