import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    API.get('/student/resources').then(res => setResources(res.data));
  }, []);

  return (
    <div>
      <h3>Resources</h3>
      <ul>
        {resources.map(r => <li key={r.id}>{r.title} - {r.file_url}</li>)}
      </ul>
    </div>
  );
}

export default Resources;
