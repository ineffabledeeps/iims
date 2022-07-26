import "./buttonTabs.styles.css";

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container">
      <button
        className={`btn-tab ${currentTab === "3rdFloor" ? "active-btn" : ""}`}
        id="3rdFloor"
        onClick={() => onClickHandler("3rdFloor")}
        type="button"
      >
        Classroom (3rd Floor)
      </button>
      <button
        className={`btn-tab ${currentTab === "4thFloor" ? "active-btn" : ""}`}
        id="4thFloor"
        onClick={() => onClickHandler("4thFloor")}
        type="button"
      >
        Classroom (4th Floor)
      </button>
      <button
        className={`btn-tab ${currentTab === "lab" ? "active-btn" : ""}`}
        id="lab"
        onClick={() => onClickHandler("lab")}
        type="button"
      >
        Labs
      </button>
      <button
        className={`btn-tab ${
          currentTab === "conferenceRoom" ? "active-btn" : ""
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
