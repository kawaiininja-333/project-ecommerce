import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  // database login fetch
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnlogin(event) {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5001/logintoken",
      data: {
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        console.log(response);
        props.setToken(response.data.access_token);
        alert("Successfully Login");
        localStorage.setItem("email", loginForm.email);
        localStorage.setItem("Logtime", formattedDate);
        navigate("/");
        // Handle successful login here, e.g., redirect to another page
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
          // Handle login error here, e.g., show an error message to the user
        }
      });
    setloginForm({
      email: "",
      password: "",
    });

    // time
    // Get the current date and time
    const currentDate = new Date();

    // Extract various components of the date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1 to get the actual month
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();

    // Create a formatted string with the date and time
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Log the formatted date to the console
    console.log("Login time:", formattedDate);

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  // other components
  let eye;
  let passwordortext = "password";
  const [passwordToggles, setpasswordToggles] = useState(false);
  const handelClick = () => {
    setpasswordToggles(!passwordToggles);
  };
  if (passwordToggles) {
    eye = "fa-solid fa-eye-slash";
    passwordortext = "text";
  } else {
    eye = "fa-solid fa-eye";
  }
  return (
    <>
      <div className="LoginformContainer">
        <div className="Loginformwrapper">
          <h2>Login</h2>
          <div className="LoginformStyleControl">
            <form className="Loginform">
              <div className="loginformcontainer-row">
                <label htmlFor="email">E-mail</label>
                <input type="email" value={loginForm.email} onChange={handleChange} text={loginForm.email} name="email" required />
              </div>

              <div className="loginformcontainer-row">
                <label htmlFor="password">Password</label>
                <input className="pass" value={loginForm.password} onChange={handleChange} text={loginForm.password} type={passwordortext} name="password" />
                <i onClick={handelClick} className={eye}></i>
              </div>
              <div className="loginformcontainer-row">
                <div className="LoginformFormet">
                  <div className="spicalformFormet">
                    <label htmlFor="rememberme">
                      <input id="rememberme" className="checkBox" type="checkbox" name="rememberme" />
                      Remember Me
                    </label>
                    <div className="forgetpassform">
                      <Link to={"/forgotpassword-change"}>Forget Password?</Link>
                    </div>
                  </div>
                  <div className="LoginBtn">
                    <button type="button" onClick={btnlogin}>
                      Login
                    </button>
                  </div>
                  <div className="formchanger">
                    Don't Have a Account? <Link to={"/Signup"}>Singup</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
