import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Attendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    API.get('/student/attendance').then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h3>Attendance</h3>
      <ul>
        {records.map(r => (
          <li key={r.id}>{r.date} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
