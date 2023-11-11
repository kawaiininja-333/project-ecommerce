// Search.js
import React from "react";
import { useFilterContext } from "../context/filter_context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchUI = styled.section`
  color: black;
  font-size: 16px;

  .search-drop-body {
    background-color: #fff;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;

    /* Replace with your desired hover background color */
  }
  .Search-list-body {
    padding: 10px;
    background-color: #fff;
    border: none;

    &:hover {
      background-color: #c0c0c0;
    }
  }
`;

function Search() {
  const history = useNavigate();
  const {
    filters: { text },
    updateFilterValue,
    filter_products,
  } = useFilterContext();

  const handleKey = (event) => {
    if (event.key === "Enter") {
      if (text) {
        history("/category");
      } else {
        history("/");
      }
    }
    // console.log("~ file ~ search ~ line ~ 17 ~ => ", text);
  };
  console.log("~ file ~ search ~ line ~ 24 ~ => ", filter_products);
  const handelClick = (set) => {
    updateFilterValue(set);
    setTimeout(() => {
      if (text) {
        history("/category");
      } else {
        history("/");
      }
    }, 200);
  };

  // const handelSearchClick = (selectedText) => {
  //   // Do something with the selected text, for example, update the filter value
  //   (selectedText);
  // };

  return (
    <>
      <div className="search-bar">
        <input className={`${text ? "searchactive" : "searchinactive"}`} type="text" name="text" placeholder="Search here" value={text} onChange={updateFilterValue} onKeyDown={handleKey} />
        <button className={`${text ? "Search--buttonactive" : "Search--buttoninactive"}`} onClick={handelClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {text && (
        <SearchUI>
          <div className="search-drop-body" style={{ position: "absolute", zIndex: "10" }}>
            {filter_products.length <= 0 ? (
              <li className="Search-list-body" style={{ listStyle: "none", textAlign: "left" }}>
                No Product found..
              </li>
            ) : (
              filter_products.slice(0, 6).map((curElm, index) => {
                return (
                  <button type="button" name="text" className="Search-list-body" key={index} style={{ listStyle: "none", textAlign: "left" }} value={curElm.tag} onClick={handelClick}>
                    {curElm.tag}
                  </button>
                );
              })
            )}
          </div>
        </SearchUI>
      )}
    </>
  );
}

export default Search;
