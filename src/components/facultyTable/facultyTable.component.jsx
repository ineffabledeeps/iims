import { useEffect, useState } from "react";
import ClassDetails from "./facultyCards.component";

import "./facultyTable.styles.css";
import redRadialGradient from "../../assets/red-radial-gradient.png";
import greenRadialGradient from "../../assets/green-radial-gradient.png";

// import facultyData from "../../data/data.js";

export default function Class({ searchField }) {
  var facultyData;
  
  
  fetch("http://localhost:8000/api/show_faculty/")
    .then(response => response.json())
    .then(data => this.facultyData =data.json())

  


  const [data, setData] = useState(facultyData);
  const [filteredData, setFilteredData] = useState(data);

  
  // const fetchUnavailable = () => {
  //   fetch("http://localhost:8000/api/show_faculty/")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // }

  // useEffect(() => {
    // fetchAvailable();
  // }, []);


  // To search data
  useEffect(() => {
    const newFilteredData = data.filter((card) =>
      card.name.toLowerCase().includes(searchField)
    );
    setFilteredData(newFilteredData);
  }, [data, searchField]);

  return (
    <section className="faculty-table">
      <div className="status-heading">
        <img
          className="status"
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

      <div className="status-heading">
        <img
          className="status"
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
              className={"notAvailable"}
              detail={detail}
            />
          );
        }
        return null;
      })}
    </section>
  );
}
