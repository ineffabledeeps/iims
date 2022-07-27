import email from "../../assets/email.png";
// import faculty from "../data/faculty-img.png";

import pfp from "../../assets/faculty-img.png";

export default function ClassDetails({ detail, className }) {
  const { fac_id,fac_name,dept_id,fac_role,fac_cab_no,available } = detail;

  return (
    <article className={`faculty-card ${className}`}>
      <img src={pfp} alt="faculty-pfp" className="faculty-pfp" />
      <div className="faculty-name-cabin">
          <p className="faculty-name">{fac_name}</p>
          <p className="faculty-cabin">Cabin - {fac_cab_no}</p>
      </div>

      <img src={email} alt="faculty-mail" className="faculty-mail" />

      <div className="faculty-timeSlot-container">
        <p className="faculty-timeSlot">Time Slot</p>
        <p className="faculty-time">9-10</p>
      </div>

      <button className="faculty-contact">Contact</button>
    </article>
  );
}
