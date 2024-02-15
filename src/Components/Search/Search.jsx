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
        .get(`https://pamper-me-backend.vercel.app/getProductsByQuery?search=${searchText}`)
        .then((res) => setSearchedProducts(res.data));
    }
  }, [searchText]);

  useEffect(() => {
    if (searchIcon == true) {
      document.body.addEventListener("click", () => {
        setSearchIcon(false)
        setSearchText("")
      })
    }
  }, [searchIcon])

  console.log(searchIcon)


  return (
    <div className={`search-container ${!searchIcon ? "small-container" : "fit-container"}`}>
      <div>
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder="Search" className={`${searchIcon ? "input-show" : "input-hide"}`}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={(e) => {
          e.stopPropagation();
          setSearchIcon(true)
        }} className={`${searchIcon ? "button-hide" : "button-show"}`}>
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
      <SearchPopUp searchedProducts={searchedProducts} searchIcon={searchIcon} searchText={searchText} />
    </div>
  );
};

export default Search;
