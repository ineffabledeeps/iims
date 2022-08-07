import React, { useState } from "react";
import ButtonTabs from "../components/buttonTabs/buttonTabs.component";
import YearTabs from "../components/YearTabs/YearTabs";
import '../components/css/stylesclassroom.css';
import file from "../assets/file-empty.png"
import download from '../assets/download.png'

import { createRoot } from "react-dom/client";

const Exam = () => {

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  const [tab, setTab] = useState("B. Tech - CSE");

  const handleClick = (btnName) => {
    setTab(btnName);
  };

  const [YEARtab, setYEAR] = useState("year1");

  const handleClick2 = (yearid) => {
    setYEAR(yearid);
  };



  return (
    <div className="Classroom-kaiff">
    {/* Button Tabs */}
    <ButtonTabs onClickHandler={handleClick} currentTab={tab} />

    {/* Year Tabs */}
    <YearTabs onClickHandler2={handleClick2} currentTab2={YEARtab} />

    {/* File Section */}

    <div className='container-kaiff'>
      <div className='file-section-kaiff'>
        <img src={file} className="file-look-kaiff" alt={'empty-file'} />
        <div>
          <div className='label-box-kaiff'>
            <button className="open-btn-kaiff">Open Image</button>
            <h5 className="label-text-kaiff">Unit Test 2022 B.Tech(Ai)</h5>
            <a
            href=""
            type="download">
              <img src={download} className="download-img-kaiff" alt={'download'} />
            </a> <br />
          </div>
        </div>
      </div>
      <div className='file-section-kaiff'>
        <img src={file} className="file-look-kaiff" alt={'empty-file'} />
        <div>
          <div className='label-box-kaiff'>
            <button className="open-btn-kaiff">Open Image</button>
            <h5 className="label-text-kaiff">Unit Test 2022 B.Tech(Ai)</h5>
            <a
            href=""
            type="download">
              <img src={download} className="download-img-kaiff" alt={'download'} />
            </a> <br />
          </div>
        </div>
      </div>
    </div>
  <br />
  </div>
  )
}

export default Exam;
