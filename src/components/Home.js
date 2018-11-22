import SkillsHolder from './SkillHolder';
import ImageContainer from './ImageContainer';
import '../styles/Home.css';

const skillsTech = [
    {name: 'JavaScript (ES6, Node.js)', exp: 1},
    {name: 'React.js (& Inferno.js)'},
    {name: 'PHP (7.x)', exp: 1},
    {name: 'MongoDB', exp: 1},
    {name: 'JS Build Tools (Gulp.js, Webpack)'},
    {name: 'CSS & CSS Preprocessors'},
    {name: 'SQL (Postgres, SQL Server)'},
    {name: 'Bash (Unix Terminal)'},
];

const skillsSoft = [
    {name: 'Self-Motivated Learner'},
    {name: 'Customer Service', exp: 5},
    {name: 'Technical Troubleshooting', exp: 3},
];

const imgSrcSet = [
    'zoe-photo--cropped-2-xl.jpg 1275w',
    'zoe-photo--cropped-2-large.jpg 678w',
    'zoe-photo--cropped-2-small.jpg 484w',
    'zoe-photo--cropped-2-xsmall.jpg 385w'
];

const imgSizes = [
    '(max-width: 380px) 360px',
    '(max-width: 420px) 400px',
    '(max-width: 770px) 660px',
    '(min-width: 1024px) 800px',
    '(min-width: 1200px) 1200px'
];

const Home = ({viewportSize}) => {
    return (
        <main>
            <div className="personal-container">
                <ImageContainer
                    figId="personal-img"
                    figCap="Full Stack Web Developer"
                    figCapPos="top"
                    imgAlt="A photo of Zoe Robertson"
                    imgSizes={imgSizes}
                    imgSrcSet={imgSrcSet}
                />
                <p>Where don't we put JavaScript nowadays?</p>
            </div>
            <div className="skill-container">
                <SkillsHolder id="tech-skills" skillsTitle="Technologies" skills={skillsTech}/>
                <SkillsHolder id="soft-skills" skillsTitle="Soft Skills" skills={skillsSoft}/>
            </div>
        </main>
    );
};

export default Home;