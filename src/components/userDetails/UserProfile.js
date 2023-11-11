import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserProfile(props) {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const email = localStorage.getItem("email");

  function getUsers() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5001/profile/${email}`,
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((response) => {
        const res = response.data;
        res.access_token && props.setToken(res.access_token);
        setProfileData({
          profile_name: res.name,
          profile_email: res.email,
          profile_phone: res.phone,
          profile_address: res.address,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="UserProfileContainer">
        {profileData ? (
          <div className="UserProfileWrapper">
            <form className="UserformContainer">
              <div className="row-form">
                <div className="row">
                  <div className="User-Row">Name: </div>
                  <div className="User-Row">{profileData.profile_name}</div>
                  <div className="UserEditButton">
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="row">
                  <div className="User-Row">E-mail: </div>
                  <div className="User-Row">{profileData.profile_email}</div>
                  <div className="UserEditButton">
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="row">
                  <div className="User-Row">Primary mobile number: </div>
                  <div className="User-Row">{profileData.profile_phone}</div>
                  <div className="UserEditButton">
                    <button type="button">Change</button>
                  </div>
                </div>
                <div className="row">
                  <div className="User-Row">Address : </div>
                  <div className="User-Row">{profileData.profile_address}</div>
                  <div className="UserEditButton">
                    <button type="button">Change</button>
                  </div>
                </div>
                <div className="row">
                  <div className="User-Row">Password: </div>
                  <div className="User-Row">************</div>
                  <div className="UserEditButton">
                    <button type="button">Change Password</button>
                  </div>
                </div>

                {/* Other rows */}
              </div>
              <div className="button">
                <div className="btn" onClick={reload}>
                  <Link to={"/setting"}>
                    <button type="button" className="UserProfileDoneBtn">
                      Done
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="App_Loading">
            <div className="App_Loading_child_row">
              <div className="App_Loading_child_row_a"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
