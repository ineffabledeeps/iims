import React from "react";
import "./buttonTabs.styles.css";

const ButtonTabs = ({ onClickHandler, currentTab }) => {
  return (
    <div className="btn-tabs-container-amit">
      <button
        className={`btn-tab-amit ${currentTab === "3rdFloor" ? "active-btn-amit" : ""}`}
        id="3rdFloor"
        onClick={() => onClickHandler("3rdFloor")}
        type="button"
      >
        Classroom (3rd Floor)
      </button>
      <button
        className={`btn-tab-amit ${currentTab === "4thFloor" ? "active-btn-amit" : ""}`}
        id="4thFloor"
        onClick={() => onClickHandler("4thFloor")}
        type="button"
      >
        Classroom (4th Floor)
      </button>
      <button
        className={`btn-tab-amit ${currentTab === "lab" ? "active-btn-amit" : ""}`}
        id="lab"
        onClick={() => onClickHandler("lab")}
        type="button"
      >
        Labs
      </button>
      <button
        className={`btn-tab-amit ${
          currentTab === "conferenceRoom" ? "active-btn-amit" : ""
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
