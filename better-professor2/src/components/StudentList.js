import React, {useState ,useEffect} from 'react';
import AddStudent from '../utils/AddStudent';
import Students from '../utils/Students';
import { axiosWithAuth } from '../utils/axiosWtihAuth';

function StudentList () {

    const [students, setStudents] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const id = localStorage.getItem('professorID')
    useEffect(() => {
        axiosWithAuth().get(`users/${id}/students`)
        .then(response =>{
            console.log('response', response)
            setStudents(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])




    return(
        <div className = 'StudentList'>
            <h1>My Students</h1>
            <AddStudent trigger={trigger} setTrigger={setTrigger} />
            <Students students={students}/>
        </div>
    )
}

export default StudentList;