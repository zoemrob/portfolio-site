import Skill from './Skill';
import '../styles/SkillHolder.css';

const SkillsHolder = ({id, skillsTitle, skills}) => (
    <section id={id} className="skill-holder">
        <h2 className="skills-header">{skillsTitle}</h2>
        <ul className="skills-list">
            {skills.map((skill, i) => (
                <Skill key={i} skill={skill} />
            ))}
        </ul>
    </section>
);

export default SkillsHolder;