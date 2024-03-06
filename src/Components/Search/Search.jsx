import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SearchPopUp from "../SearchPopup/SearchPopUp";
import { TbSearch } from "react-icons/tb";
import "./Search.css";
import { Context } from "../../Providers/PamperContext";

const Search = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { profileHover, setProfileHover } = useContext(Context);
  const [searchTab, setSearchTab] = useState("services");

  useEffect(() => {
    if (searchText.length > 2) {
      const url = `https://pamper-me-backend.vercel.app/api/${searchTab}/${
        searchTab === "services" ? "getServicesByQuery" : "getProductsByQuery"
      }?search=${searchText}`;
      axios.get(url).then((res) => setSearchedProducts(res.data));
    }
  }, [searchText, searchTab]);

  useEffect(() => {
    if (searchIcon == true) {
      document.body.addEventListener("click", () => {
        setSearchIcon(false);
        setSearchText("");
      });
    }

    if (profileHover == true) {
      document.body.addEventListener("click", () => {
        setProfileHover(false);
      });
    }
  }, [searchIcon, profileHover]);

  // console.log(searchIcon)

  return (
    <div
      className={`search-container ${
        !searchIcon ? "small-container" : "fit-container"
      }`}
    >
      <div>
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder="Search"
          className={`${searchIcon ? "input-show" : "input-hide"}`}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSearchIcon(true);
          }}
          className={`${searchIcon ? "button-hide" : "button-show"}`}
        >
          <TbSearch className="w-6 h-6" />
        </button>
      </div>
      <SearchPopUp
        searchedProducts={searchedProducts}
        searchIcon={searchIcon}
        searchText={searchText}
        setSearchText={setSearchText}
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        setSearchedProducts={setSearchedProducts}
      />
    </div>
  );
};

export default Search;
