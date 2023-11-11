// combainProduct.js

// in this the file All product will mearge.

import phones from "../Product/Phone";
import laptop from "../Product/Laptop";
import shoe from "../Product/Shoe";

const CombinedProduct = () => {
  const allProducts = [...phones, ...laptop, ...shoe];

  return allProducts;
};

export default CombinedProduct;
