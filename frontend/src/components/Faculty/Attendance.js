import React, { useState, useEffect } from 'react';
import API from '../../services/api';

function Attendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    API.get('/faculty/attendance/1').then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h3>Attendance</h3>
      <ul>
        {records.map(r => (
          <li key={r.id}>{r.student_name} - {r.date} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
