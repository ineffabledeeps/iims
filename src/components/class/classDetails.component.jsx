export default function ClassDetails({ detail }) {
  const {
    time,
    subject,
    dept_id_id,
    more_details
  } = detail;
  return (
    <div className="class-details">
      <div className="type">
        <h3>{more_details.room['room_no']}</h3>
        <p>{more_details.room['type']}</p>
      </div>

      <ul className="info">
        <li>
          <p className="info-key">Subject/Course</p>
          <p className="info-value subject">

            {subject}
            <span> ({dept_id_id})</span>
          </p>
        </li>
        <li>
          <p className="info-key">Time</p>
          <p className="info-value time">{time}</p>
        </li>
        <li>
          <p className="info-key">Faculty</p>
          <p className="info-value faculty">{more_details["faculty"]}</p>
        </li>
      </ul>
      <div className="class-strength">
        <meter min="0" max={more_details.room['capacity']} value={more_details.room['count']}></meter>
      </div>
    </div>
  );
}
