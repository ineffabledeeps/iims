import React from "react";
import { useState } from "react";
import SearchBar from "../components/searchBar/searchBar.component"
import ButtonTabs from "../components/facultyButtonTabs/facultyButtonTabs.component";
import FacultyTable from "../components/facultyTable/facultyTable.component";

// import "./styles.css";
import "../components/css/facultystyles.css"

export default function Faculty() {
  const [tab, setTab] = useState("CSE");
  const [searchField, setSearchField] = useState("");

  const handleClick = (btnName) => {
    setTab(btnName);
  };

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="faculty">
    {/* // <div className="faculty"> */}
      {/* Search Bar */}
      <SearchBar
        placeholderText="Enter Faculty Name"
        handleOnChange={onSearchChange}
      />

      {/* Button Tabs */}
      <ButtonTabs onClickHandler={handleClick} currentTab={tab} />

      {/* Classes */}
      <FacultyTable searchField={searchField} />
    </div>
  );
}
