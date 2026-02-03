import React, { useState, useEffect } from 'react';
import API from '../../services/api';

function Notifications() {
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    API.get('/notifications/1').then(res => setNotifications(res.data));
  }, []);

  const sendNotification = () => {
    API.post('/faculty/notification', { message })
      .then(() => alert("Notification sent"));
  };

  return (
    <div>
      <h3>Notifications</h3>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={sendNotification}>Send</button>
      <ul>
        {notifications.map(n => <li key={n.id}>{n.message}</li>)}
      </ul>
    </div>
  );
}

export default Notifications;
