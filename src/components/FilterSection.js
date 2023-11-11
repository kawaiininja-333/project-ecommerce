// FilterSection.js
import React, { useState } from "react";
import { useFilterContext } from "../context/filter_context";
import FormatPrice from "../Helper/FormatPrice";

const FilterSection = () => {
  const [dropMenu, setdropMenu] = useState(false);
  const {
    filters: { text, price, maxPrice, minPrice, category, brand },
    all_products,
    updateFilterValue,
    clearFilters,
    sorting,
    sorting_value,
    // clearFilters,category, color, price, maxPrice, minPrice
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };
  const filteredProducts = category === "All" ? all_products : all_products.filter((curElem) => curElem.category === category);

  const categoryData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(filteredProducts, "brand");

  // sorting

  const psorting = [
    { name: "Price( lowest )", value: "lowest" },
    { name: "Price( Highest )", value: "highest" },
    { name: "A - z", value: "a-z" },
    { name: "Z - a", value: "z-a" },
    { name: "Rating", value: "rating" },
  ];

  // const labelData = getUniqueData(all_products, "label");
  console.log("~ file ~ FilterSection ~ line ~ 29 ~ => ", "sorting => ", sorting);
  // console.log("~ file ~ FilterSection ~ line ~ 30 ~ => ", "maxPrice => ", Math.max(maxPrice));
  // console.log("~ file ~ FilterSection ~ line ~ 31 ~ => ", "minPrice => ", Math.max(minPrice));
  // console.log("~ file ~ FilterSection ~ line ~ 32 ~ => ", "Price => ", Math.max(price));

  // console.log(categoryData);

  return (
    <>
      <div className="Filter_section">
        <form className="FilterSection--SearchBar" onSubmit={(e) => e.preventDefault()}>
          <input className="search-fa-Section-product-search" type="text" name="text" placeholder="Search here" value={text} onChange={updateFilterValue} />
        </form>

        <div className="filter_sort">
          <div className="filterSection--sort-drop">
            <h3>Sort</h3>
            <button
              className="FilterSection--DropDown-menu"
              onClick={() => {
                setdropMenu(!dropMenu);
              }}
            >
              <i class={`fa-solid ${dropMenu ? "fa-angle-up" : "fa-angle-down"}`}></i>
            </button>
          </div>
          {dropMenu ? (
            <form action="#" className="filter_sort-form">
              {psorting.map((curElem, index) => {
                return (
                  <button key={index} type="button" name="sort" value={curElem.value} onClick={sorting} className={curElem.value === sorting_value ? "sortactive" : ""}>
                    {curElem.name}
                  </button>
                );
              })}
            </form>
          ) : (
            ""
          )}
        </div>

        <div className="filter-category">
          <h3>Category</h3>
          <div className="FiltreSection--Category">
            {categoryData
              ? categoryData.map((curElem, index) => {
                  return (
                    <button key={index} type="button" name="category" onClick={updateFilterValue} className={curElem === category ? "categoryactive" : ""} value={curElem}>
                      {curElem}
                    </button>
                  );
                })
              : "data is empty"}
          </div>
        </div>

        <div className="filter_brand">
          <h3>Brand</h3>
          <div className="FilterSection--Brand">
            {brandData.map((curElem, index) => {
              return (
                <button key={index} type="button" name="brand" className={curElem === brand ? "brandactive" : ""} onClick={updateFilterValue} value={curElem}>
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter_price">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} currency={"USD"} />
          </p>
          <input type="range" name="price" min={Math.max(minPrice)} max={Math.max(maxPrice)} step={0.01} value={Math.max(price)} onChange={updateFilterValue} />
        </div>

        <div className="filter-clear">
          <button className="btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
