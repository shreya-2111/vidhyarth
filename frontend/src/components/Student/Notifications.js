import React, { useEffect, useState } from 'react';
import API from '../../services/api';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    API.get('/student/notifications').then(res => setNotifications(res.data));
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map(n => <li key={n.id}>{n.message}</li>)}
      </ul>
    </div>
  );
}

export default Notifications;
