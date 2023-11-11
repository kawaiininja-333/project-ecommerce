const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortDate;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if(sorting_value === "rating") {
          return b.rating - a.rating
        }
      };
      newSortDate = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortDate,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { category, brand, text, price } = state.filters;

      if (text) {
        const userKeywords = text.toLowerCase().split(" ");

        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          const productName = curElem.name.toLowerCase();
          const productBrand = curElem.brand.toLowerCase();
          const productLabel = curElem.label.toLowerCase();
          const productTag = curElem.tag.toLowerCase();
          const productKeyTags = curElem.keyWords.toLowerCase();
          const productdescription = curElem.description.toLowerCase();
          const productPrice = curElem.price.toString();
          const productAbout = curElem.about.toLowerCase();

          for (let i = 0; i < userKeywords.length; i++) {
            const keword = userKeywords[i];
            if (!(productName.includes(keword) || productBrand.includes(keword) || productLabel.includes(keword) || productTag.includes(keword) || productKeyTags.includes(keword) || productdescription.includes(keword) || productAbout.includes(keword) || productPrice.includes(keword))) {
              return false; // If any character doesn't match, exclude the product
            }
          }

          return true; // All characters match, include the product
        });
      }

      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.brand.toLowerCase() === brand.toLowerCase());
      }

      // if (color !== "all") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.color.includes(color));
      // }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price === Math.max(price));
      } else {
        tempFilterProduct = tempFilterProduct.filter((curElem) => (curElem.price === Math.max(price) ? curElem.price === Math.max(price) : curElem.price <= Math.max(price)));
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          brand: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
