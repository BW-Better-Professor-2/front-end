import React, {useState, useEffect} from 'react';
import AddReminder from '../utils/AddReminder';
import Reminders from '../utils/Reminders';
import { axiosWithAuth } from '../utils/axiosWtihAuth';


function ReminderList () {
    
    const [trigger, setTrigger] = useState(false);
    const [reminders, setReminders] = useState([]);
    const id = localStorage.getItem('professorID')
    useEffect(() => {
        axiosWithAuth().get(`users/${id}/messages`)
        .then(response =>{
            console.log('response', response)
            setReminders(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])


    return(
        <div className = 'reminder-list'>
            <h1>My Reminders</h1>
            <AddReminder trigger={trigger} setTrigger={setTrigger} />
            <Reminders reminders={reminders}/>
        </div>
    )
}

export default ReminderList;