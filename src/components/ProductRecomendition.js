import React from "react";
import { useFilterContext } from "../context/filter_context";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ProductRecomendition() {
  const { all_products } = useFilterContext();
  const { id } = useParams();

  const pID = parseInt(id, 10);

  const productFilter = all_products.find((p) => p.id === pID);

  const filteredProd = all_products.filter((p) => p.brand === productFilter.brand);

  console.log(filteredProd);
  return (
    <div className="Recomendcontrol">
      {filteredProd.slice(0, 10).map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductRecomendition;
