import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Timetable() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    API.get('/faculty/timetable/1').then(res => setTimetable(res.data));
  }, []);

  return (
    <div>
      <h3>Timetable</h3>
      <ul>
        {timetable.map((item, index) => (
          <li key={index}>{item.course} - {item.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Timetable;
