import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    API.get('/student/assignments').then(res => setAssignments(res.data));
  }, []);

  return (
    <div>
      <h3>Assignments</h3>
      <ul>
        {assignments.map(a => <li key={a.id}>{a.title} - {a.deadline}</li>)}
      </ul>
    </div>
  );
}

export default Assignments;
