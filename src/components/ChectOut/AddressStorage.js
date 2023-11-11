import axios from "axios";
import React, { useEffect, useState } from "react";

function AddressStorage({ phone, onSelectAddress, getselectedAddress }) {
  const email = localStorage.getItem("email");
  const [getAlladdress, setgetAlladdress] = useState([]);

  useEffect(() => {
    get_user_address();
  }, [email]);

  function get_user_address() {
    if (email) {
      axios({
        method: "GET",
        url: `http://127.0.0.1:5002/address/${email}`,
      })
        .then((response) => {
          const parsedAddress = response.data.map((address) => ({
            user_name: address.user_name,
            Area: address.Area,
            house_no: address.house_no,
            country: address.country,
            Pincode: address.Pincode,
            state: address.state,
            Town_City: address.Town,
          }));
          setgetAlladdress(parsedAddress);
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response) {
            console.log("Error: Fields are Empty or " + error.response.data.message);
          }
        });
    }
  }

  return (
    <div className="Address_oparation_container">
      {Array.isArray(getAlladdress) && getAlladdress.length > 0 ? (
        getAlladdress.map((address, index) => (
          <>
            <div key={index} className="container_card_address_storage">
              <div className="Product_info_cards">
                <div className="Select_address">
                  <button className="useBtn" onClick={() => onSelectAddress(address)}>
                    Use
                  </button>
                </div>
                <div className="Address">
                  <div className="CheckOut_details_user_name">
                    <p>{address.user_name}</p>
                  </div>
                  <div className="CheckOut_details_Address">
                    <p className="House_no">{address.house_no}</p>
                    <p className="Area_street">{address.Area}</p>
                    <p className="Town_city">
                      {address.Town_City}, {address.state}, {address.Pincode}
                    </p>
                    <p className="country">{address.country}</p>
                  </div>
                  <div className="CheckOut_details_phone_number">
                    <p>{phone}</p>
                  </div>
                  <div className="CheckOut_details_email">
                    <p>{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="A">
          No Address Saved
        </div>
      )}
    </div>
  );
}

export default AddressStorage;
