import { useState } from "react";
import ButtonTabs from "./components/buttonTabs/buttonTabs.component";
import Class from "./components/class/class.component";

import "./styles.css";

export default function Classroom() {
  const [tab, setTab] = useState("3rdFloor");

  const handleClick = (btnName) => {
    setTab(btnName);
  };
  return (
    <div className="">
      {/* Button Tabs */}
      <ButtonTabs onClickHandler={handleClick} currentTab={tab} />

      {/* Classes */}
      <Class started={true} />
      <Class started={false} />
    </div>
  );
}