import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

// import { allProjects } from "../data";

function HomePage () {
    // variables 
    const [projectList, setProjectList] = useState([]);

    // methods
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}cases/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
        // setProjectList(allProjects);
    }, []);

    // templates 


    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            // return <div key={key}>{projectData.title}</div>;
            })}
        </div>
    );
}

export default HomePage;