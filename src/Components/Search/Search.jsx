import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchPopUp from "../SearchPopup/SearchPopUp";
import "./Search.css";

const Search = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length > 2) {
      axios
        .get(`http://localhost:5000/getProductsByQuery?search=${searchText}`)
        .then((res) => setSearchedProducts(res.data));
    }
  }, [searchText]);


  console.log(searchedProducts)

  return (
    <div className={`search-container ${!searchIcon ? "small-container" : "fit-container"}`}>
      <div>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search" className={`${searchIcon ? "input-show" : "input-hide"}`}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSearchIcon(true)} className={`${searchIcon ? "button-hide" : "button-show"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <SearchPopUp searchedProducts={searchedProducts} searchIcon={searchIcon} searchText={searchText}/>
    </div>
  );
};

export default Search;
