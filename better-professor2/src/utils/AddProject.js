import React, {useState} from "react";
import { axiosWithAuth } from "./axiosWtihAuth";

const ProjectForm = props => {
    const [project, setProject] = useState({
        title: "",
        body: ""
    });

    const handleChanges = e => {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project);
    };

    const submitForm = e => {
        e.preventDefault();
        const newProject ={
            
        }
        props.addNewProject(project);
        setProject({title: "", body: ""});
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

            <label htmlFor='body'>Project Details</label>
            <textarea 
                id= "body"
                type="text"
                name= "body"
                onChange={handleChanges}
                value={project.body}
            />
            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;