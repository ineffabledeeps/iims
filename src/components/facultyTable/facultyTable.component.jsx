import React from "react";
import { useEffect, useState } from "react";
import ClassDetails from "./facultyCards.component";

import "./facultyTable.styles.css";
import redRadialGradient from "../../assets/red-radial-gradient.png";
import greenRadialGradient from "../../assets/green-radial-gradient.png";

// import facultyData from "../../Data/data.js";

export default function Class({ searchField }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData)

  //console.log(filteredData)

  useEffect(()=> {
    // fetch("http://localhost:8000/api/show_faculty/", {
    //   Method: "GET",
    //   Headers: {
    //     Accept: "application.json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((result) => result.json())
    //   .then((data) => setData(data)); 

      (async () => {
        const resp = await fetch("http://localhost:8000/api/show_faculty/", {
          Method: "GET",
          Headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
        })
        const fdata = await resp.json();
        setData(fdata)
        

      })()
  
  }, [])

  // To search dataa
  useEffect(() => {

    const newFilteredData = data.filter((card) =>
      card.name
        ? card.name.toLowerCase().includes(searchField)
        : card.fac_name.toLowerCase().includes(searchField)
    );
    setFilteredData(newFilteredData);


  }, [data, searchField]);


  return (
    <section className="faculty-table-faculty">
      <div className="status-heading-faculty">
        <img
          className="status-faculty"
          alt="status-radial-gradient"
          src={greenRadialGradient}
        />

        <h4>Available</h4>
      </div>

      {/* available Details */}
      {filteredData.map((detail, i) => {
        if (detail.available) {
          return (
            <ClassDetails key={i.toString()} className={""} detail={detail} />
          );
        }
        return null;
      })}

      <div className="status-heading-faculty">
        <img
          className="status-faculty"
          alt="status-radial-gradient"
          src={redRadialGradient}
        />

        <h4>Not Available</h4>
      </div>

      {/* notAvailable Details */}
      {filteredData.map((detail, i) => {
        if (!detail.available) {
          return (
            <ClassDetails
              key={i.toString()}
              className={"notAvailable-faculty"}
              detail={detail}
            />
          );
        }
        return null;
      })}
    </section>
  );
}
