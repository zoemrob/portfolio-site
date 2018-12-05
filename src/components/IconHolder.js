import React from 'react';
import Icon, {icons} from "./Icons";
import '../styles/IconHolder.css';

const IconHolder = () => (
    <div className="icon-holder">
        <Icon name={icons.gh} link="https://github.com/zoemrob"/>
        <Icon name={icons.ln} link="https://www.linkedin.com/in/zoe-robertson/"/>
        <Icon name={icons.fb} link="https://www.facebook.com/zoe.m.robertson"/>
    </div>
);
export default IconHolder;