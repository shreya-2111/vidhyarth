import React, { useState, useEffect } from 'react';
import API from '../../services/api';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    API.get('/faculty/assignment/1').then(res => setAssignments(res.data));
  }, []);

  const createAssignment = () => {
    API.post('/faculty/assignment', { course_id: 1, title })
      .then(() => alert("Assignment created"));
  };

  return (
    <div>
      <h3>Assignments</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Assignment Title" />
      <button onClick={createAssignment}>Create</button>
      <ul>
        {assignments.map(a => <li key={a.id}>{a.title} - {a.deadline}</li>)}
      </ul>
    </div>
  );
}

export default Assignments;
