import { useEffect, useState } from "react";
import ClassDetails from "./classDetails.component";

import "./class.styles.css";
import redRadialGradient from "../../assets/red-radial-gradient.png";
import greenRadialGradient from "../../assets/green-radial-gradient.png";

import startedData from "../../data/startedData.js";
import notStartedData from "../../data/notStartedData";

export default function Class({ started }) {
  const [details, setDetails] = useState([]);


  const fetchAvailable = () => {
    fetch("http://localhost:8000/api/show_classrooms/started")
      .then(response => response.json())
      .then(data => setDetails(data))
  }

  const fetchUnavailable = () => {
    fetch("http://localhost:8000/api/show_classrooms/notstarted")
      .then(response => response.json())
      .then(data => setDetails(data))
  }

  useEffect(() => {


    if (started) {
      fetchAvailable();
    }

    if (started === false) {
      fetchUnavailable();
    }

  }, []);

  return (
    <article className="class">
      {/* Heading */}
      <div className="class-heading">
        {started ? (
          <img
            className="status"
            alt="status-radial-gradient"
            src={greenRadialGradient}
          />
        ) : (
          <img
            className="status"
            alt="status-radial-gradient"
            src={redRadialGradient}
          />
        )}
        <h4>{started ? "Started" : "Not Started"} Class</h4>
      </div>

      <div className="class-group">
        {/* Details */}
        {details.map((detail, i) => (
          <ClassDetails key={i} detail={detail} />
        ))}
      </div>
    </article>
  );
}
