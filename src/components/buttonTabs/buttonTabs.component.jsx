import "./buttonTabs.styles.css";

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container-cr">
      <button
        className={`btn-tab-cr ${currentTab === "3rdFloor" ? "active-btn-cr" : ""}`}
        id="3rdFloor"
        onClick={() => onClickHandler("3rdFloor")}
        type="button"
      >
        Classroom (3rd Floor)
      </button>
      <button
        className={`btn-tab-cr ${currentTab === "4thFloor" ? "active-btn-cr" : ""}`}
        id="4thFloor"
        onClick={() => onClickHandler("4thFloor")}
        type="button"
      >
        Classroom (4th Floor)
      </button>
      <button
        className={`btn-tab-cr ${currentTab === "lab" ? "active-btn-cr" : ""}`}
        id="lab"
        onClick={() => onClickHandler("lab")}
        type="button"
      >
        Labs
      </button>
      <button
        className={`btn-tab-cr ${
          currentTab === "conferenceRoom" ? "active-btn-cr" : ""
        }`}
        id="conferenceRoom"
        onClick={() => onClickHandler("conferenceRoom")}
        type="button"
      >
        Conference Room
      </button>
    </div>
  );
};

export default ButtonTabs;
