import React from "react";
import "./searchBar.styles.css";
import searchIcon from "../../assets/search.png";

const SearchBar = ({ placeholderText, handleOnChange }) => {
  return (
    <div className="searchBar-container-faculty">
      <img src={searchIcon} alt="searchBar-icon" className="searchBar-icon-faculty" />
      <input
        className="searchBar-faculty"
        type="search"
        placeholder={placeholderText}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
