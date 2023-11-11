import React, { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import axios from "axios";

function ShoppingCheckout(props) {
  const [getprofilData, setgetprofilData] = useState("");
  const email = localStorage.getItem("email");
  useEffect(() => {
    getUsersDetails();
  }, []);
  function getUsersDetails() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5001/profile_details/${email}`,
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((resopnse) => {
        const res = resopnse.data;
        res.access_token && props.setToken(res.access_token);
        setgetprofilData({
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
          if (error.resopnse === 401) {
            alert("wrong connection");
          }
        }
      });
  }
  console.log(getprofilData.Profile_address);

  return (
    <div>
      <ShoppingCart user_name={getprofilData.profile_name} address={getprofilData.profile_address} user_email={getprofilData.profile_email} phone={getprofilData.profile_phone} />
    </div>
  );
}

export default ShoppingCheckout;
