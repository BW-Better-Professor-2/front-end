import React, {useState} from "react";
import { axiosWithAuth } from "./axiosWtihAuth";

const StudentForm = props => {
    const [student, setStudent] = useState({
        studentName: "",
        studentEmail: ""
    });

    const handleChanges = e => {
        setStudent({...student, [e.target.name]: e.target.value})
        console.log(student);
    };

    const submitForm = e => {
        e.preventDefault();
        const newStudent={
            professor_id: localStorage.getItem('professorID'),
            name: student.studentName,
            email: student.studentEmail
        }
        console.log(newStudent);
        props.addNewStudent(student);
        axiosWithAuth().post('/students', newStudent)
        .then(response =>{
            console.log(response)
        })
        setStudent({studentName: "", studentEmail: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='studentName'>Student Name</label>
            <input 
                id= "studentName"
                type="text"
                name= "studentName"
                onChange={handleChanges}
                value={student.studentName}
            />

            <label htmlFor='studentEmail'>Student Email</label>
            <input 
                id= "studentEmail"
                type="text"
                name= "studentEmail"
                onChange={handleChanges}
                value={student.studentEmail}
            />
            <button type='submit'>Add Student</button>
        </form>
    )
}

export default StudentForm;