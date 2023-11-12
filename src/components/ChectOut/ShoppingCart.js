import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddressOparation from "./AddressOparation";
import AddressStorage from "./AddressStorage";
import FormatPrice from "../../Helper/FormatPrice";
import { useProductContext } from "../../context/productContext";

function ShoppingCart({ user_email, phone }) {
  const { id } = useParams();
  const { quantity } = useParams();

  const { getSingleProduct, singleProduct } = useProductContext();

  const [showAddressForm, setshowAddressForm] = useState(false);
  const [addressData, setaddressData] = useState(null);
  const [assressClicked, setassressClicked] = useState(false);

  function getselectedAddress(addressIsselected) {
    console.log(addressIsselected);
  }

  const ProductID = parseInt(id, 10);

  useEffect(() => {
    getSingleProduct(ProductID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProductID]);

  let total = 0;
  const DeleveryCharges = singleProduct.DeleveryCharges;
  const price = <FormatPrice price={singleProduct.price} currency={"USD"} />;
  let path;

  if (assressClicked) {
    path = `/purchese/${ProductID}/${user_email}/checkout`;
    console.log(assressClicked);
  }

  const showForm = () => {
    setTimeout(() => {
      setshowAddressForm(!showAddressForm);
    }, 100);
  };

  if (DeleveryCharges > 0) {
    total = price * quantity + DeleveryCharges;
  } else {
    // eslint-disable-next-line no-unused-vars
    total = quantity * price;
  }
  const handleSelectedAddress = (selectedAddressData) => {
    setaddressData(selectedAddressData);
    if (selectedAddressData) {
      setassressClicked(true);
    }
  };

  const handelLinks = () => {
    setTimeout(() => {}, 100);
  };

  return (
    <div className="ShoppingCart_Container">
      <div className="ShoppingCart_Wrapper">
        <div className="Shopping_Headder grid1">
          <div className="CheckOut_details_card">
            <div className="ShoppingCart--checkoutName">
              <p className="CheckOut_details_Name">{singleProduct.name}</p>
            </div>
            <div className="Product_info_cards_container">
              <div className="Product_info_cards">
                {addressData ? (
                  <div className="Address">
                    <div className="CheckOut_details_user_name">
                      <p>{addressData.user_name}</p>
                    </div>
                    <div className="CheckOut_details_Address">
                      <p className="House_no">{addressData.house_no}</p>
                      <p className="Area_street">{addressData.Area}</p>
                      <p className="Town_city">
                        {addressData.Town_City + ","} {addressData.state + ","} {addressData.Pincode}
                      </p>
                      <p className="Landmark">{addressData.country}</p>
                    </div>
                    <div className="CheckOut_details_phone_number">
                      <p>{phone}</p>
                    </div>
                    <div className="CheckOut_details_email">
                      <p>{user_email}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="Address">Select Address</div>
                  </>
                )}
              </div>
              <div className="Product_info_cards">
                <div className="CheckOut_details_Quantity">
                  <div className="Row_CheckTotal_pricce">
                    <h6>Detail Review</h6>
                  </div>
                  <div className="Row_CheckTotal_pricce">
                    <p>Quantity</p>
                    <span>{quantity}x</span>
                  </div>
                  <div className="Row_CheckTotal_pricce">
                    <p>Price</p>
                    <span>{singleProduct.price}</span>
                  </div>
                  <div className="Row_CheckTotal_pricce">
                    <p>Delevery</p>
                    <span>
                      <FormatPrice price={singleProduct.DeleveryCharges} currency={"USD"} />
                    </span>
                  </div>
                  <div className="Row_CheckTotal_pricce">
                    <p>Total</p>
                    <span>{<FormatPrice price={singleProduct.DeleveryCharges} currency={"USD"} /> > 0 ? <FormatPrice price={(singleProduct.price * quantity).toFixed(2)} currency={"USD"} /> : <FormatPrice price={(singleProduct.price * quantity + parseFloat(singleProduct.DeleveryCharges)).toFixed(2)} currency={"USD"} />}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Product_info_price">
              <Link className="shoppingcart--link-checkout" onClick={handelLinks} to={path}>
                <div className="shopping--check-out-button">
                  <span className="CheckoutPrice">Check Out </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid2">
          {showAddressForm ? (
            <>
              <AddressOparation />
              <button className="form_btn_Close" onClick={showForm}>
                Close
              </button>
            </>
          ) : (
            <div className="addressFormcontainer_box_form_g">
              <div className="formg--z" onClick={showForm}>
                Add New Address
              </div>
            </div>
          )}
        </div>
        <div className="grid3">
          <AddressStorage getselectedAddress={getselectedAddress} addressData={addressData} onSelectAddress={handleSelectedAddress} phone={phone} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
