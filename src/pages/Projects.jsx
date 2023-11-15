import React from 'react';
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import AllProjects from '../components/Projects'

const Projects = () => {

  return (
      <section>
          <Nav />

          <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>
            <AllProjects />
          </div>
      </section>
  );
}

export default Projects;