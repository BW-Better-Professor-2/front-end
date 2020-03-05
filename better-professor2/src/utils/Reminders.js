import React from 'react';

const Reminders = props => {
    return (
      <div className="reminder-list">
        {props.reminders.map(reminder => (
          <div className="reminder" key={reminder.id}>
            <h2>{reminder.message}</h2>
            <p>{reminder.time_stamp}</p>
          </div>
        ))}
      </div>
    );
  };

export default Reminders;