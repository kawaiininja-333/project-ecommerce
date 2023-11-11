import React from "react";
import phones from "../Product/Phone";

function ProductOffers({ numericId }) {
  const numericProductId = parseInt(numericId, 10);
  const product = phones.find((p) => p.id === numericProductId);

  return (
    <div className="ProductOffersContainer">
      <div className="ProductOfferScrollControl">
        {product.offers.map((offer, index) => (
          <div className="ProductOfferCard" key={index}>
            {offer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOffers;
