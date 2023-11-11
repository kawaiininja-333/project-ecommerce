import React, { useEffect } from "react";
import ProductMainDetails from "./ProductMainDetails";
import { useProductContext } from "../context/productContext.js";
import { useUserProfile } from "../context/userProfileContext.js";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { getSingleProduct, singleProduct, quantity } = useProductContext();

  // quantity: 1,

  const { user } = useUserProfile();

  // const { name } = singleProduct;
  // const userName = user.name;
  // const userEmail = user.email;

  const { id } = useParams();

  const ProductID = parseInt(id, 10);

  useEffect(() => {
    getSingleProduct(ProductID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProductID]);

  // console.log("~file ~ line ~ 7 from ProductInfo.js ~", useProductContext());
  // console.log("~file ~ line ~ 8 name from ProductInfo.js ~", name);

  return (
    <div className="ProductInfo--Container">
      <ProductMainDetails product={singleProduct} user={user} quantity={quantity} />
    </div>
  );
};

export default ProductInfo;
