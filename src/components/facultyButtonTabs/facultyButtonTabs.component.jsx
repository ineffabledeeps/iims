import React from "react";
import "./facultyButtonTabs.styles.css";

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container-faculty">
      <button
        className={`btn-tab-faculty ${currentTab === "CSE" ? "active-btn-faculty" : ""}`}
        id="CSE"
        onClick={() => onClickHandler("CSE")}
        type="button"
      >
        B.Tech - CSE
      </button>
      <button
        className={`btn-tab-faculty ${currentTab === "BioEng" ? "active-btn-faculty" : ""}`}
        id="BioEng"
        onClick={() => onClickHandler("BioEng")}
        type="button"
      >
        B.Tech - BioEngineering
      </button>
      <button
        className={`btn-tab-faculty ${currentTab === "BDES" ? "active-btn-faculty" : ""}`}
        id="BDES"
        onClick={() => onClickHandler("BDES")}
        type="button"
      >
        B.Des
      </button>
      <button
        className={`btn-tab-faculty ${currentTab === "BCA" ? "active-btn-faculty" : ""}`}
        id="BCA"
        onClick={() => onClickHandler("BCA")}
        type="button"
      >
        BCA
      </button>{" "}
      <button
        className={`btn-tab-faculty ${currentTab === "BBA" ? "active-btn-faculty" : ""}`}
        id="BBA"
        onClick={() => onClickHandler("BBA")}
        type="button"
      >
        B.B.A.
      </button>{" "}
      <button
        className={`btn-tab-faculty ${currentTab === "MCA" ? "active-btn-faculty" : ""}`}
        id="MCA"
        onClick={() => onClickHandler("MCA")}
        type="button"
      >
        MCA
      </button>
    </div>
  );
};

export default ButtonTabs;
