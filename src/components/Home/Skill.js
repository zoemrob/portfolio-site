import React from 'react';
import Tooltip from '../Tooltip';
import {def} from '../../../../portfolio-site/src/utils';

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

const makeKey = skill => skill.name.replace(' ','');

export const makeSkill = (skill) => (
    <Skill key={makeKey(skill)} skill={skill} />
);