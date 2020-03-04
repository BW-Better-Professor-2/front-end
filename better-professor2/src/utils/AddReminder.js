import React, {useState} from "react";

const ReminderForm = props => {
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
        props.addNewReminder(reminder);
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
            <input 
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