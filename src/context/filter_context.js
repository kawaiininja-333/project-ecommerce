import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    brand: "All",
    color: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  // get all product
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);
  // console.log("~file: filter_context.js", state);

  // const setGridView = () => {
  //   return dispatch({ type: "SET_GRID_VIEW" });
  // };

  // const setListView = () => {
  //   return dispatch({ type: "SET_LIST_VIEW" });
  // };

  // sorting Function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  //   to clear filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //   tosort products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  //   to load all the products
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return <FilterContext.Provider value={{ ...state, updateFilterValue, clearFilters, sorting }}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
