// productContext.js
import { createContext, useContext, useEffect, useReducer } from "react";
import CombinedProduct from "../combainProduct/CombinedProduct";
import ProductReducer from "../reducer/productReducer";

const ProductContext = createContext();

const combinedProduct = CombinedProduct();

const initialState = {
  products: [],
  recomendition: [],
  privewImage: [],
  CurrentprivewImage: [],
  featureProducts: [],
  isSingleLoading: [],
  singleProduct: {},
  quantity: 1,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProduct = () => {
    const products = combinedProduct;

    dispatch({ type: "SET_ALL_DATA", payload: products });
  };

  // console.log("~productContect ~ line 29", products);
  //   extract all product to single and get the data

  const getSingleProduct = (id) => {
    const singleProduct = combinedProduct.find((product) => product.id === id);

    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  };

  const getPreviewImage = () => {
    const privewImage = combinedProduct.imagess;

    dispatch({ type: "SET_ALL_IMAGE_DATA", payload: privewImage });
  };

  const getSinglePreviewImage = (curImg) => {
    const singleImage = curImg;
    dispatch({ type: "SET_SINGLE_IMAGE_DATA", payload: singleImage });
    // console.log("~productContect ~ line 43", curImg);
  };
  // console.log("~productContect ~ line 43", initialState.products);

  const setQuantity = (quantity) => {
    const quantitys = quantity;

    dispatch({ type: "SET_QUANTITY", payload: quantitys });
  };
  // console.log("~productContect ~ line ~ 55 ~", state);

  // const getTotalQuantity = () => {
  //   const quantity = combinedProduct;

  //   dispatch({ type: "GET_QUANTITY", payload: quantity });
  // };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getPreviewImage();
  }, []);

  // useEffect(() => {
  //   getTotalQuantity();
  // }, []);

  return <ProductContext.Provider value={{ ...state, getSingleProduct, getSinglePreviewImage, setQuantity }}>{children}</ProductContext.Provider>;
};

// custom hooks

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
