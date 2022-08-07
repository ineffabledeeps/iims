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
    <div className="class-details-amit">
      <div className="details-flex-amit">
        <div className="type-amit">
          <h3>{classNumber}</h3>
          <p>{classType}</p>
        </div>

        <ul className="info-amit">
          <li>
            <p className="info-key-amit">Subject</p>
            <p className="info-value-amit">{subject}</p>
          </li>
          <li>
            <p className="info-key-amit">Course & Year</p>
            <p className="info-value-amit">{courseNYear}</p>
          </li>
          <li>
            <p className="info-key-amit">Time</p>
            <p className="info-value-amit">{time}</p>
          </li>
          <li>
            <p className="info-key-amit">Faculty</p>
            <p className="info-value-amit">{faculty}</p>
          </li>
        </ul>
      </div>

      <div className="class-strength-amit">
        <meter min="0" max={totalCapacity} value={students}></meter>
        <p>Classroom Strenth</p>
      </div>
    </div>
  );
}
