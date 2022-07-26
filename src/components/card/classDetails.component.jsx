export default function ClassDetails({ detail }) {
  const {
    classNumber,
    classType,
    subject,
    courseNYear,
    time,
    faculty,
    students,
    totalCapacity
  } = detail;

  return (
    <div className="class-details">
      <div className="details-flex">
        <div className="type">
          <h3>{classNumber}</h3>
          <p>{classType}</p>
        </div>

        <ul className="info">
          <li>
            <p className="info-key">Subject</p>
            <p className="info-value">{subject}</p>
          </li>
          <li>
            <p className="info-key">Course & Year</p>
            <p className="info-value">{courseNYear}</p>
          </li>
          <li>
            <p className="info-key">Time</p>
            <p className="info-value">{time}</p>
          </li>
          <li>
            <p className="info-key">Faculty</p>
            <p className="info-value">{faculty}</p>
          </li>
        </ul>
      </div>

      <div className="class-strength">
        <meter min="0" max={totalCapacity} value={students}></meter>
        <p>Classroom Strenth</p>
      </div>
    </div>
  );
}
