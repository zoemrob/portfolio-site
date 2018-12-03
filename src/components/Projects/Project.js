import ImageContainer from "../ImageContainer";
import Icon, {icons} from "../Icons";
import {makeRepoLink, makeIdWithMixin, empty, makeLiveLink} from '../../utils';

const makeAlt = title => `A ${title} screenshot.`;

const Project = ({title, desc, repoLink, imgs = [], imgSizes = [], liveLink = ''}) => (
    <li className="project-item">
        <h3>{title}</h3>
        {!empty(imgs) && (
            <ImageContainer
                figId={makeIdWithMixin(title, 'figure')}
                imgAlt={makeAlt(title)}
                imgSrcSet={imgs}
                imgSizes={imgSizes.length !== 0 ? imgSizes : null}
                lazy={true}
            />
        )}
        <p className="project-desc">{desc}</p>
        <div className="repo-icon-holder">
            <Icon
                id={makeIdWithMixin(title, 'icon')}
                name={icons.gh}
                link={makeRepoLink(repoLink)}
            />
            <label className="icon-label" htmlFor={makeIdWithMixin(title, 'icon')}>Repo Link</label>
        </div>
        {!empty(liveLink) && <a className="live-link" href={makeLiveLink(liveLink)}>Live Example</a>}
    </li>
);

export default Project;