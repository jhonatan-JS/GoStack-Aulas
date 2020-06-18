import React, { useState } from 'react';
import Header from './components/Header';

import backImage from './assets/back.jpeg'

import './App.css';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {

        setProjects([...projects, `Novo projeto ${Date.now()}`]); 
        console.log(projects);
    }

    return (
        <>
        <Header title="Projects" /> 

        <img width={350} src={backImage} alt="background"/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>        
    );
}
export default App;