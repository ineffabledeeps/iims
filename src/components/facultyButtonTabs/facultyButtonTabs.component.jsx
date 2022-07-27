import "./facultyButtonTabs.styles.css";

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container">
      <button
        className={`btn-tab ${currentTab === "CSE" ? "active-btn" : ""}`}
        id="CSE"
        onClick={() => onClickHandler("CSE")}
        type="button"
      >
        B.Tech - CSE
      </button>
      <button
        className={`btn-tab ${currentTab === "BioEng" ? "active-btn" : ""}`}
        id="BioEng"
        onClick={() => onClickHandler("BioEng")}
        type="button"
      >
        B.Tech - BioEngineering
      </button>
      <button
        className={`btn-tab ${currentTab === "BDES" ? "active-btn" : ""}`}
        id="BDES"
        onClick={() => onClickHandler("BDES")}
        type="button"
      >
        B.Des
      </button>
      <button
        className={`btn-tab ${currentTab === "BCA" ? "active-btn" : ""}`}
        id="BCA"
        onClick={() => onClickHandler("BCA")}
        type="button"
      >
        BCA
      </button>{" "}
      <button
        className={`btn-tab ${currentTab === "BBA" ? "active-btn" : ""}`}
        id="BBA"
        onClick={() => onClickHandler("BBA")}
        type="button"
      >
        B.B.A.
      </button>{" "}
      <button
        className={`btn-tab ${currentTab === "MCA" ? "active-btn" : ""}`}
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
