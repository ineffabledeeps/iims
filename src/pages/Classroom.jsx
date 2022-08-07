import React from "react";
import { useState } from "react";
import ButtonTabs from '../components/classroomTabs/classroomTabs.component';
import Class from "../components/class/class.component";

const Classroom = () => {

  const [tab, setTab] = useState("3rdFloor");

  const handleClick = (btnName) => {
    setTab(btnName);
  };

  return (
    <div className="Classroom">
      {/* Button Tabs */}
      <ButtonTabs onClickHandler={handleClick} currentTab={tab} />

      {/* Classes */}
      <Class started={true} />
      <Class started={false} />
    </div>
  )
}

export default Classroom