import React from 'react';
import ManageUsers from './ManageUsers';
import Analytics from './Analytics';

function AdminDashboard() {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <ManageUsers />
      <Analytics />
    </div>
  );
}

export default AdminDashboard;
