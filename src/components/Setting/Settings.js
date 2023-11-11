import React, { useState } from "react";
import UserProfile from "../userDetails/UserProfile";
import useToken from "../useToken";
import OrderDetails6 from "./OrderDetails6";

function Settings() {
  let NavigatePath;
  const { token } = useToken();
  const [selectedList, setSelectedList] = useState(null); // Initial selected list

  function handleNavigatePath(selectedList) {
    if (selectedList === "Your Profile") {
      NavigatePath = UserProfile;
    } else if (selectedList === "Your Orders") {
      NavigatePath = OrderDetails6;
    }
  }

  handleNavigatePath(selectedList);
  const handleNavigate = (list) => {
    setSelectedList(list);
  };

  return (
    <div className="Settings">
      <div className="Settings_container">
        <div className="Settings_wrapper_Block">
          <div className="Settings_navigator">
            <nav>
              <ul>
                <li className="Settings_list_navigating_hover" onClick={() => handleNavigate(null)}>
                  Your Account
                </li>
                <li>{">"}</li>
                <li className="Settings_list_navigating_hover">{selectedList}</li>
              </ul>
            </nav>
          </div>
          <div className="Setting_Navigation_root">
            {NavigatePath ? (
              <div className="Setting_user_profile">
                <div>
                  <NavigatePath token={token} />
                </div>
              </div>
            ) : (
              <nav>
                <ul>
                  <li className="User_settings_navigator" onClick={() => handleNavigate("Your Profile")}>
                    <i class="fa-solid fa-lock"></i> Your Account
                  </li>
                  {/* <li className="User_settings_navigator" onClick={() => handleNavigate("Your Orders")}>
                    <i class="fa-solid fa-box-open"></i> Your Orders
                  </li>
                  <li className="User_settings_navigator" onClick={() => handleNavigate("Other List")}>
                    Other List
                  </li> */}
                  {/* Add more list items as needed */}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
