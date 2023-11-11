import React, { useState } from "react";
import Select from "react-select";
import countries from "./country";
import state from "./State";
import axios from "axios";

function AddressOparation() {
  const email = localStorage.getItem("email");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [textvalue, settextvalue] = useState({
    country: null,
    state: null,
    House_no: null,
    Area: null,
    Landmark: null,
    Pincode: null,
    Town_City: null,
  });

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    settextvalue((prevValue) => ({
      ...prevValue,
      country: selectedOption ? selectedOption.label : "",
    }));
  };
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    settextvalue((prevValue) => ({
      ...prevValue,
      state: selectedOption ? selectedOption.label : "",
    }));
  };

  const filteredStates = state.filter((state) => state.country === selectedCountry?.label);
  console.log("COuntry", selectedCountry);
  console.log("State", selectedState);
  console.log("filere state", filteredStates);
  console.log("size", textvalue);
  console.log("here:", textvalue.Area, textvalue.House_no, textvalue.Landmark, textvalue.country, textvalue.state);
  // address operation
  function handeladdress(event) {
    const { value, name } = event.target;
    settextvalue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function postAddress() {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5002/address",
      data: {
        email: email,
        house_no: textvalue.House_no,
        Area: textvalue.Area,
        Landmark: textvalue.Landmark,
        Pincode: textvalue.Pincode,
        Town_City: textvalue.Town_City,
        country: textvalue.country,
        state: textvalue.state,
      },
    })
      .then((response) => {
        console.log("Request successful", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="Address_container_5200">
      {textvalue && (
        <form className="container_address_box">
          <div className="address_row_container_a">
            <Select options={countries} placeholder="Select a country" name="country" onChange={handleCountryChange} value={selectedCountry} />
            <div className="address_container_row_b">
              <div className="address_container_row_z">
                <label htmlFor="Address_number_Flat_House_num">Flate, House no, Building, Company, Apartment</label>
                <input onChange={handeladdress} className="AddressOparation--Data-Field" id="Address_number_Flat_House_num" name="House_no" required />
              </div>
              <div className="address_container_row_z">
                <label htmlFor="Address_Area_Street_Village">Area, Street, Sector, Village</label>
                <input onChange={handeladdress} className="AddressOparation--Data-Field" id="Address_Area_Street_Village" name="Area" required />
              </div>
              <div className="address_container_row_z">
                <label htmlFor="Address_Landmark">Landmark</label>
                <input onChange={handeladdress} className="AddressOparation--Data-Field" id="Address_Landmark" name="Landmark" required />
              </div>
              <div className="address_container_row_z">
                <label htmlFor="Address_Pincode">Pincode</label>
                <input onChange={handeladdress} className="AddressOparation--Data-Field" id="Address_Pincode" name="Pincode" required />
              </div>
              <div className="address_container_row_z">
                <label htmlFor="Address_Town_City">Town/City</label>
                <input onChange={handeladdress} className="AddressOparation--Data-Field" id="Address_Town_City" name="Town_City" required />
              </div>
            </div>
            <Select options={filteredStates} name="state" placeholder="Select a State" onChange={handleStateChange} value={selectedState} />
          </div>
          <button onClick={postAddress} className="address_btn" type="button">
            Use this address
          </button>
        </form>
      )}
    </div>
  );
}

export default AddressOparation;
