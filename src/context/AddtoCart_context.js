import { createContext, useContext } from "react";
import React from "react";
import CombinedProduct from "../combainProduct/CombinedProduct";

const CartContext = createContext();

const combinedProduct = CombinedProduct();

const initialState = {
  products: [],
  privewImage: [],
  CurrentprivewImage: [],
  featureProducts: [],
  isSingleLoading: [],
  singleProduct: {},
  quantity: 1,
};
