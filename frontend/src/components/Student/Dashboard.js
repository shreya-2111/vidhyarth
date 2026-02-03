import React from 'react';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Notifications from './Notifications';
import Resources from './Resources';

function StudentDashboard() {
  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <Assignments />
      <Attendance />
      <Resources />
      <Notifications />
    </div>
  );
}

export default StudentDashboard;
