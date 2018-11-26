import '../styles/SkillHolder.css';

const SkillsHolder = ({id, skillsTitle, children}) => (
    <section id={id} className="skill-holder">
        <h2 className="skills-header">{skillsTitle}</h2>
        <ul className="skills-list">
            {children}
        </ul>
    </section>
);

export default SkillsHolder;