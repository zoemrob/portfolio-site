import '../../styles/Award.css';

const Award = ({title, infoLink, details, certificateLink, date}) => {
    return (
        <li>
            <h3 className="award-header">{title}</h3>
            <p className="award-details">{details}</p>
            {certificateLink && <a href={certificateLink} className="award-link">View Certificate</a>}
            {date && <p className="award-date">{date}</p>}
        </li>
    )
};

export const makeAward = (award, i) => (
    <Award key={'award' + i} {...award}/>
);