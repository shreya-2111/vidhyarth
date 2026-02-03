import React from 'react';
import Timetable from './Timetable';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Notifications from './Notifications';

function FacultyDashboard() {
  return (
    <div className="container">
      <h2>Faculty Dashboard</h2>
      <Timetable />
      <Assignments />
      <Attendance />
      <Notifications />
    </div>
  );
}

export default FacultyDashboard;
