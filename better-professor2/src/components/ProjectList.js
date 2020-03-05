import React, {useState} from 'react';
import AddProject from '../utils/AddProject';
import Projects from '../utils/Projects';

function ProjectList () {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "",
            notes: "",
        }
    ]);

    const addNewProject = project => {
        const newProject = {
            id: Date.now(),
            title: project.title,
            notes: project.notes
        }
        setProjects([...projects, newProject]);
    }


    return(
        <div className = 'project-list'>
            <h1>My Projects</h1>
            <AddProject addNewProject={addNewProject} />
            <Projects projects={projects}/>
        </div>
    )
}

export default ProjectList;