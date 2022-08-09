import { useState } from 'react';

import studentRequest from "../../assets/student-request.png";

export default function ClassDetails({ detail, className }) {
  const { status_req, name, prn_id, details, dept_id_id, notes, request_id } = detail;

  const [notesField, setNotesField] = useState({
    notes: ""
  });
  console.log(notesField)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNotesField(prevState => ({... prevState, [name]: {value} }))

  }



  let year;
  if (details.year === 1) {
    year = '1st Year'
  } else if (details.year === 2) {
    year = '2nd Year'
  } else if (details.year === 3) {
    year = '3rd Year'
  } else if (details.year === 4) {
    year = '4th Year'
  }

  const onAcceptHandler = () => {
    (async () => {
      const resp = await fetch("http://localhost:8000/api/get_requests/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        "req_id":`${request_id}`
         }),
      })
      
    }) ()
    window.location.reload();
  }

  const onDeclineHandler = () => {
    (async () => {
      const resp = await fetch("http://localhost:8000/api/get_requests/decline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        "req_id":`${request_id}`
         }),
      })
      
    }) ()
    window.location.reload();
  }

  const onContactHandler = () => {
    // (async () => {
    //   const resp = await fetch("http://localhost:8000/api/get_requests/decline", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     "req_id":`${request_id}`
    //      }),
    //   })
      
    // }) ()
    window.location.reload();
  }

  return (
    <article className={`student-card ${className}`}>
      <img src={studentRequest} alt="student-pfp" className="student-pfp" />
      {/* Name & PRN */}
      <div className="student-info">
        <p className="student-name">{details.name}</p>
        <p className="student-prn">{prn_id}</p>
      </div>

      {/* Course & Year */}
      <div className="student-course-info">
        <p className="student-course">{dept_id_id}</p>
        <p className="student-year">{year}</p>
      </div>

      {/* Note title & Note Input */}
      <div className="student-note">
        <p className="note-title">Note</p>
        <textarea type="text" className="note" placeholder="+" name="notes" value={notesField.comments} onChange={handleChange} />
      </div>

      {/* Buttons */}
      {status_req === "requesting" ? (
        <div className="request-btn-container">
          <button className="accept-btn" onClick={onAcceptHandler}> Accept</button>
          <button className="decline-btn" onClick={onDeclineHandler}>Decline</button>
        </div>
      ) : (
        <button className="contact-btn">Contact</button>
      )}
    </article>
  );
}
