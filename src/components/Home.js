import Skill from './Skill';

const skills = [
    {name:'JavaScript (ES5 & ES6)'},
    {name:'React.js (and Inferno.js)'},
    {name: 'PHP (7.1+)'}
];

const Home = ({viewportSize}) => {
    return (
        <main>
            <figure id="personal-photo">

            </figure>
            <section id="skills">
                <ul id="skills-list">
                    {skills.map((skill, i) => (
                        <Skill key={i} skill={skill} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Home;