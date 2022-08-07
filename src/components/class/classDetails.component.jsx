import React from "react";

export default function ClassDetails({ detail }) {
  const {
    classNumber,
    classType,
    subject,
    course,
    time,
    faculty,
    students,
    totalCapacity
  } = detail;

  return (
    <div className="class-details-amit">
      <div className="type-amit">
        <h3>{classNumber}</h3>
        <p>{classType}</p>
      </div>

      <ul className="info-amit">
        <li>
          <p className="info-key-amit">Subject/Course</p>
          <p className="info-value subject-amit">
            {subject}
            <span> ({course})</span>
          </p>
        </li>
        <li>
          <p className="info-key-amit">Time</p>
          <p className="info-value time-amit">{time}</p>
        </li>
        <li>
          <p className="info-key-amit">Faculty</p>
          <p className="info-value faculty-amit">{faculty}</p>
        </li>
      </ul>

      <div className="class-strength-amit">
        <meter min="0" max={totalCapacity} value={students}></meter>
      </div>
    </div>
  );
}
