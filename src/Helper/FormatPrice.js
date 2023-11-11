import React from "react";

const FormatPrice = ({ price, currency }) => {
  // Define an object to map currency codes to their respective currency display names.
  const currencyDisplayNames = {
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    INR: "INR",
    JPY: "JPY",
  };

  const formattedCurrency = currencyDisplayNames[currency] || "USD";

  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: formattedCurrency,
    maximumFractionDigits: 2,
  }).format(price);
};

export default FormatPrice;
