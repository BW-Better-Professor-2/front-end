import React, {useState} from 'react';
import AddReminder from '../utils/AddReminder';
import Reminders from '../utils/Reminders';

function ReminderList () {

    const [reminders, setReminders] = useState([
        {
            id: 1,
            title: "",
            body: "",
        }
    ]);

    const addNewReminder = reminder => {
        const newReminder = {
            id: Date.now(),
            title: reminder.title,
            body: reminder.body
        }
        setReminders([...reminders, newReminder]);
    }


    return(
        <div className = 'reminder-list'>
            <h1>My Reminders</h1>
            <AddReminder addNewReminder={addNewReminder} />
            <Reminders reminders={reminders}/>
        </div>
    )
}

export default ReminderList;