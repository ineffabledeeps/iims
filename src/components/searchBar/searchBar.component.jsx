import "./searchBar.styles.css";
import searchIcon from "../../assets/search.png";

const SearchBar = ({ placeholderText, handleOnChange }) => {
  return (
    <div className="searchBar-container">
      <img src={searchIcon} alt="searchBar-icon" className="searchBar-icon" />
      <input
        className="searchBar"
        type="search"
        placeholder={placeholderText}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
