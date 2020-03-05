import React, {useState} from "react";
import { axiosWithAuth } from "./axiosWtihAuth";
import {useHistory} from 'react-router-dom';

const ReminderForm = props => {
    const history = useHistory('');
    const [reminder, setReminder] = useState({
        title: "",
        body: ""
    });

    const handleChanges = e => {
        setReminder({...reminder, [e.target.name]: e.target.value})
        console.log(reminder);
    };

    const submitForm = e => {
        e.preventDefault();
        const newReminder = {
            professor_id: localStorage.getItem('professorID'),
            title: reminder.title,
            body: reminder.body
        }

        console.log(newReminder)

        axiosWithAuth().post('/messages', newReminder)
        .then(response => {
            console.log('New reminder added to messages: ', response)
            props.setTrigger(!props.trigger)
            history.push('/studentlist')
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
        setReminder({title: "", body: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Reminder Title</label>
            <input 
                id= "title"
                type="text"
                name= "title"
                onChange={handleChanges}
                value={reminder.title}
            />

            <label htmlFor='body'>Reminder Details</label>
            <textarea 
                id= "body"
                type="text"
                name= "body"
                onChange={handleChanges}
                value={reminder.body}
            />
            <button type='submit'>Add Reminder</button>
        </form>
    )
}

export default ReminderForm;