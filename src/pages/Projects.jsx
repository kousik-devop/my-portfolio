import React from 'react'
import Project from '../components/Project';
import projects  from '../assets/projects.json';

function Projects() {

  return (
    <div className='w-full h-full '>
        {projects.map((project, index) => {
            return <Project key= {index} project = {project}/>
        })}
    </div>
  )
}

export default Projects