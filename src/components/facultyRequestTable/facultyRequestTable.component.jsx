import { useEffect, useState } from "react";
import StudentRequestCards from "./studentRequestCards.component";

import "./facultyRequestTable.styles.css";
import yellowRadialGradient from "../../assets/yellow-radialGradient.png";
import greenRadialGradient from "../../assets/green-radialGradient.png";

import facultyRequestData from "../../Data/req-data.js";

export default function FacultyRequestTable() {
  const [data, setData] = useState([]);
  console.log(data);

  // http://localhost:8000/api/get_requests/accept

  // return fetch("/messages/get", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
//     "req_id":"1"
//      }),
  // }).then((response) => {
  //   //this.setState({ messages: response.body });
  //   return response.json();
  // });

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/get_requests/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fac_id: "f001",
        }),
      });
      const data = await response.json();
      setData(data);
    })();
  }, []);


  return (
    <section className="facultyRequestTable">
      <section className="request-table">
        <div className="status-heading">
          <img
            className="status"
            alt="status-radial-gradient"
            src={yellowRadialGradient}
          />

          <h4>Student Request</h4>
        </div>

        {/* available Details */}
        {data.map((detail, i) => {
          if (detail.status_req === "requesting") {
            return (
              <StudentRequestCards
                key={i.toString()}
                className={""}
                detail={detail}
              />
            );
          }
          return null;
        })}

        <div className="status-heading">
          <img
            className="status"
            alt="status-radial-gradient"
            src={greenRadialGradient}
          />

          <h4>Accepted Request</h4>
        </div>

        {/* notAvailable Details */}
        {data.map((detail, i) => {
          if (detail.status_req === "accepted") {
            return <StudentRequestCards key={i.toString()} detail={detail} />;
          }
          return null;
        })}
      </section>
    </section>
  );
}
