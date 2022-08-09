import React from "react";

export default function ClassDetails({ detail }) {
  const {
    more_details,
    subject,
    dept_id_id,
    time,
    students,
  } = detail;

  return (
    <div className="class-details-amit">
      <div className="type-amit">
        <h3>{more_details.room["room_no"]}</h3>
        <p>{more_details.room["type"]}</p>
      </div>

      <ul className="info-amit">
        <li>
          <p className="info-key-amit">Subject/Course</p>
          <p className="info-value subject-amit">
            {subject}
            <span> ({dept_id_id})</span>
          </p>
        </li>
        <li>
          <p className="info-key-amit">Time</p>
          <p className="info-value time-amit">{time}</p>
        </li>
        <li>
          <p className="info-key-amit">Faculty</p>
          <p className="info-value faculty-amit">{more_details['faculty']}</p>
        </li>
      </ul>

      <div className="class-strength-amit">
        <meter min="0" max={more_details.room["capacity"]} value={more_details.room["count"]}></meter>
      </div>
    </div>
  );
}
