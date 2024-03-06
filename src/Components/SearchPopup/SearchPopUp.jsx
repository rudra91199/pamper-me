import React, { useState } from "react";
import icon from "../../assets/Images/Logo/logo.png";
import { useNavigate } from "react-router-dom";

const SearchPopUp = ({
  searchIcon,
  searchedProducts,
  searchText,
  setSearchText,
  searchTab,
  setSearchTab,
  setSearchedProducts
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        search-popUp
        ${searchText?.length > 2 ? "search-popUp-show" : "search-popUp-hide"}
        
          `}
    >
      <div className="search-tabs">
        <button
          onClick={() => setSearchTab("services")}
          className={searchTab === "services" && "selected-tab"}
        >
          Services
        </button>
        <button
          onClick={() => {
            setSearchTab("products");
            setSearchedProducts([]);
        }}
          className={searchTab === "products" && "selected-tab"}
        >
          Products
        </button>
      </div>
      <div
        className={`searched-products ${searchedProducts == 0 && "no-match"}
        ${searchedProducts?.length > 3 && "search-popUp-scroll"}`}
      >
        {searchedProducts?.length == 0 ? (
          <p>No Matches Found</p>
        ) : (
          searchedProducts?.map((product, i) => (
            <div onClick={() => navigate("/searchProducts")} key={i}>
              <img src={searchTab === "services" ? product?.img : product?.images[0]?.src} alt="" />
              <div>
                <h4 className="popUp-product-title">{searchTab === "services" ? product?.title : product?.name}</h4>
                <p>Price: {product?.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        className="search-result-btn"
        onClick={() => {
          navigate("/searchProducts", {
            state: {
              products: searchedProducts,
              searchText,
              searchTab
            },
          });
          setSearchText("");
        }}
      >
        View All Products.
      </button>
    </div>
  );
};

export default SearchPopUp;
