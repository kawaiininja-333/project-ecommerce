// UserProfileContext.js
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import SendUserData from "../components/userDetails/SendUserData";
import userReducer from "../reducer/userReducer";

const UserProfileContext = createContext();

const initialState = {
  user: [],
  userDetails: [],
  userAddress: [],
};

const UserProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Use useState to store the user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    SendUserData()
      .then((data) => {
        // console.log("Fetched user data:", data); // Add this log
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  }, []);

  useEffect(() => {
    // Watch for changes in userData and dispatch when it's available
    if (userData) {
      // console.log("Setting user data in state:", userData); // Add this log
      dispatch({ type: "SET_CURRENT_USER_DATA", payload: userData });
    }
  }, [userData]);

  // console.log("~ file ~ userProductContext.js ~ line ~ 36 ~ ", userData, " ~ initialState ~ STATE => ~ ", state, " ~ USer ~ ~");

  return <UserProfileContext.Provider value={{ ...state }}>{children}</UserProfileContext.Provider>;
};

const useUserProfile = () => {
  return useContext(UserProfileContext);
};

export { UserProfileProvider, UserProfileContext, useUserProfile };
