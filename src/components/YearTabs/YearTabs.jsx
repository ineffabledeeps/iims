import React from 'react';
import '../css/stylesclassroom.css';

const YearTabs = ({onClickHandler2, currentTab2}) => {
  return (
    <div className='year-btn-container-kaiff'>
      <button 
      className={`year-btns-kaiff ${currentTab2 === "year1" ? "active-yrbtn-kaiff" : ""}`}
      id="year1"
      onClick={() => onClickHandler2("year1")}
      type="button">
        1st Year
      </button>
      <button 
      className={`year-btns-kaiff ${currentTab2 === "year2" ? "active-yrbtn-kaiff" : ""}`}
      id="year2"
      onClick={() => onClickHandler2("year2")}
      type="button">
        2nd Year
      </button>
      <button 
      className={`year-btns-kaiff ${currentTab2 === "year3" ? "active-yrbtn-kaiff" : ""}`}
      id="year3"
      onClick={() => onClickHandler2("year3")}
      type="button">
        3rd Year
      </button>
      <button 
      className={`year-btns-kaiff ${currentTab2 === "year4" ? "active-yrbtn-kaiff" : ""}`}
      id="year4"
      onClick={() => onClickHandler2("year4")}
      type="button">
        4th Year
      </button>
    </div>
  );
}

export default YearTabs;
