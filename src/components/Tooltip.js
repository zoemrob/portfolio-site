import {def} from '../utils';
import '../styles/Tooltip.css';

const Tooltip = ({mainText, tooltipText}) => (
    <h3 className="skill-header tooltip">
        {mainText}
        <span className="skill-experience tooltip-text">{tooltipText}</span>
    </h3>
);
export default Tooltip;