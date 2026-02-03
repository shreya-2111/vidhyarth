import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/admin/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h3>Manage Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ManageUsers;
