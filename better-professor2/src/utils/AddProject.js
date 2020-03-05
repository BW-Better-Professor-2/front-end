import React, {useState} from "react";
import { axiosWithAuth } from "./axiosWtihAuth";
import {useHistory} from 'react-router-dom';

const ProjectForm = props => {
    const history = useHistory();
    const [project, setProject] = useState({
        title: "",
        notes: ""
    });

    const handleChanges = e => {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project);
    };

    const submitForm = e => {
        e.preventDefault();
        const newProject ={
            student_id: localStorage.getItem('studentID'),
            title: project.title,
            notes: project.notes
        }
        console.log(newProject)

        axiosWithAuth().post('/projects', newProject)
        .then(response => {
            console.log('New project added to student: ', response)
            
        })
        setProject({title: "", notes: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Project Title</label>
            <input 
                id= "title"
                type="text"
                name= "title"
                onChange={handleChanges}
                value={project.title}
            />

            <label htmlFor='notes'>Project Details</label>
            <textarea 
                id= "notes"
                type="text"
                name= "notes"
                onChange={handleChanges}
                value={project.notes}
            />
            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;