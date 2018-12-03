import {withLazyLoad} from "../withLazyLoad";
import Project from "./Project";
import {makeIdWithMixin} from "../../utils";
import '../../styles/Projects.css';

const projectData = [
    {
        title: 'Neighborhood Map',
        desc: 'A React.js Progressive Web App utilizing Google Maps and Yelp APIs',
        repoLink: 'neighborhood-map'
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
        repoLink: 'my-reads-app'
    }
];

const Projects = () => (
    <main>
        <ul className="project-list">
            {projectData.map(proj => (
                <Project
                    key={makeIdWithMixin(proj.title, 'key')}
                    {...proj}
                />
            ))}
        </ul>
    </main>
);

const LazyProjects = withLazyLoad(Projects);
export default LazyProjects;