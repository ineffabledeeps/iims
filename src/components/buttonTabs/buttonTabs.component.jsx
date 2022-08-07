import React from "react";
import "../css/stylesclassroom.css"

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container-kaiff">
      <button
        className={`btn-tab-kaiff ${currentTab === "B. Tech - CSE" ? "active-btn-kaiff" : ""}`}
        id="B. Tech - CSE"
        onClick={() => onClickHandler("B. Tech - CSE")}
        type="button"
      >
        B. Tech - CSE
      </button>
      <button
        className={`btn-tab-kaiff ${currentTab === "B. Tech. - BioEngineering" ? "active-btn-kaiff" : ""}`}
        id="B. Tech. - BioEngineering"
        onClick={() => onClickHandler("B. Tech. - BioEngineering")}
        type="button"
      >
        B. Tech. - BioEngineering
      </button>
      <button
        className={`btn-tab-kaiff ${currentTab === "B. Des" ? "active-btn-kaiff" : ""}`}
        id="B. Des"
        onClick={() => onClickHandler("B. Des")}
        type="button"
      >
        B. Design
      </button>
      <button
        className={`btn-tab-kaiff ${
          currentTab === "M.Sc. Medical Biotechnology" ? "active-btn-kaiff" : ""
        }`}
        id="M.Sc. Medical Biotechnology"
        onClick={() => onClickHandler("M.Sc. Medical Biotechnology")}
        type="button"
      >
        M.Sc. Medical Biotechnology
      </button>
      <button
        className={`btn-tab-kaiff ${
          currentTab === "B.B.A" ? "active-btn-kaiff" : ""
        }`}
        id="B.B.A"
        onClick={() => onClickHandler("B.B.A")}
        type="button"
      >
        B.B.A
      </button>
      <button
        className={`btn-tab-kaiff ${
          currentTab === "MCA" ? "active-btn-kaiff" : ""
        }`}
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
