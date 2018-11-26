import Tooltip from './Tooltip';
import {def} from '../utils';

const Skill = ({skill}) => {
        const {name, exp} = skill;
        const tooltipText = def(exp) && (exp + (exp === 1 && '+') + ' years');
        return (
            <li>
                {tooltipText ? (
                    <Tooltip mainText={name} tooltipText={tooltipText}/>
                ): (
                    <h3 className="skill-header">{name}</h3>
                )}
            </li>
        );
};

export const makeSkill = (skill, i) => (
    <Skill key={skill + i} skill={skill} />
);