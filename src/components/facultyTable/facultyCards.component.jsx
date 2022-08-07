import React from "react";
import email from "../../assets/email.png";

import availablePfpImage from "../../Data/faculty-img.png";
import notAvailablePfpImage from "../../Data/notAvailable-faculty-img.png";

export default function ClassDetails({ detail, className }) {
  const { pfp, fac_name, fac_cab_no, timeSlot, status } = detail;

  return (
    <article className={`faculty-card-faculty ${className}`}>
      <img src={status ? availablePfpImage : notAvailablePfpImage} alt="faculty-pfp" className="faculty-pfp-faculty" />
      <div className="faculty-name-cabin-faculty">
        <p className="faculty-name-faculty">{fac_name}</p>
        <p className="faculty-cabin-faculty">Cabin - {fac_cab_no}</p>
      </div>
      <img src={email} alt="faculty-mail" className="faculty-mail-faculty" />
      <div className="faculty-timeSlot-container-faculty">
        <p className="faculty-timeSlot-faculty">Time Slot</p>
        <p className="faculty-time-faculty">{timeSlot}</p>
      </div>
      <button className="faculty-contact-faculty">Contact</button>
    </article>
  );
}
