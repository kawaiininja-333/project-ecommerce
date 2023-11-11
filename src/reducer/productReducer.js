const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_DATA":
      const featureProducts = action.payload.filter((curElem) => {
        return curElem.featureData === true;
      });

      return {
        ...state,
        products: action.payload,
        featureProducts: featureProducts,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };

    case "SET_ALL_IMAGE_DATA":
      return {
        ...state,
        privewImage: action.payload,
      };

    case "SET_SINGLE_IMAGE_DATA":
      // console.log("Hovered image info: ", action.payload);

      return {
        ...state,
        CurrentprivewImage: action.payload,
      };

    case "SET_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };

    case "GET_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
