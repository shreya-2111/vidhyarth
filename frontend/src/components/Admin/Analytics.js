import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get('/admin/analytics').then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h3>System Analytics</h3>
      <p>Attendance Rate: {data.attendanceRate}%</p>
      <p>Assignment Submission Rate: {data.submissionRate}%</p>
    </div>
  );
}

export default Analytics;
