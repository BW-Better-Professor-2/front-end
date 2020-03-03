import React, {useState} from 'react';

export default function VerifyUser() {

    const[users, setUsers] = useState([
        {
            id: 1,
            username: "",
            password: ''
        }
    ])

    const addNewUser = user => {
        const newUser = {
            id: Date.now(),
            username: user.username,
            password: user.password
        }
        setUsers([...users, newUser])
    }

}