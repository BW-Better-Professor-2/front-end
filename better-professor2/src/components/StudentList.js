import React, {useState} from 'react';
import ReactDom from 'react-dom';
import AddStudent from '../utils/AddStudent';
import Students from '../utils/Students';

function StudentList () {

    const [students, setStudents] = useState([
        {
            id: 1,
            studentName: "",
            studentEmail: "",
        }
    ]);

    const addNewStudent = student => {
        const newStudent = {
            id: Date.now(),
            studentName: student.studentName,
            studentEmail: student.studentEmail
        }
        setStudents([...students, setStudent]);
    }


    return(
        <div className = 'StudentList'>
            <h1>My Students</h1>
            <AddStudent addNewStudent={addNewStudent} />
            <Students students={students}/>
        </div>
    )
}