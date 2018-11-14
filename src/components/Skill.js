import {def} from '../utils';
import {Link} from 'inferno-router';

const Skill = ({skill}) => {
    const {name, projectRef} = skill;
    return (
        <li>
            <h2 className="skill-header">{name}</h2>
            {def(projectRef) && (
                <Link to={`/projects#${projectRef}`} />
            )}
        </li>

    );
};
export default Skill;