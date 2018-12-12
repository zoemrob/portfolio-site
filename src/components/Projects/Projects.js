import React from 'react';
import {useLazyLoad} from "../../hooks/useLazyLoad";
import Project from "./Project";
import '../../styles/Projects.css';
import {makeIdWithMixin} from "../../utils";

const projectData = [
    {
        title: 'Neighborhood Map',
        desc: 'A React.js Progressive Web App utilizing Google Maps and Yelp APIs',
        repoLink: 'neighborhood-map',
        liveLink: 'https://zoemrob-gladstone-map.now.sh'
    },
    {
        title: 'Restaurant Reviews',
        desc: 'A responsive, accessible, offline-first web app with dynamic ServiceWorker caching',
        repoLink: 'restaurant-app-ui'
    },
    {
        title: 'Memory Game',
        desc: 'Memory game written in vanilla javascript',
        repoLink: 'memory-game'
    },
    {
        title: 'MyReads App',
        desc: 'A React app which demonstrates working with poorly structured API data...',
        repoLink: 'my-reads-app',
        liveLink: 'https://zoemrob-my-reads.now.sh'
    }
];
// currently only if projects should change which is static
const Projects = () => {
    useLazyLoad(projectData);

    return (
        <main>
            <ul className="project-list">
                {projectData.map(proj => (
                    <Project key={makeIdWithMixin(proj.title, 'project')}
                             {...proj}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Projects;