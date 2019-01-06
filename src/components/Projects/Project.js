import React from 'react';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import ImageContainer from "../ImageContainer";
import Icon, {icons} from "../Icons";
import {makeRepoLink, makeIdWithMixin, empty} from '../../../../portfolio-site/src/utils';

const makeAlt = title => `A ${title} screenshot.`;

const Project = ({title, desc, repoLink, imgs = [], imgSizes = [], liveLink = ''}) => (
    <li className="project-item pure-u-1 pure-g">
        <div className="box-1 pure-u-sm-1 pure-u-lg-1-2">
            <h3 className={empty(imgs) ? 'only-title': null}>{title}</h3>
            {!empty(imgs) && (
                <ImageContainer
                    figId={makeIdWithMixin(title, 'figure')}
                    imgAlt={makeAlt(title)}
                    imgSrcSet={imgs}
                    imgSizes={imgSizes.length !== 0 ? imgSizes : null}
                    lazy={true}
                />
            )}
        </div>
        <div className="box-2 pure-u-sm-1 pure-u-lg-1-2">
            <p className="project-desc">{desc}</p>
            <div className="repo-icon-holder">
                <Icon
                    id={makeIdWithMixin(title, 'icon')}
                    name={icons.gh}
                    link={makeRepoLink(repoLink)}
                />
                <label className="icon-label" htmlFor={makeIdWithMixin(title, 'icon')}>Repo Link</label>
            </div>
            <p className="repo-link">
                <a href={makeRepoLink(repoLink)}>Check it out on Github</a>
            </p>
            {!empty(liveLink) && <a className="live-link" href={liveLink}>Live Example</a>}
        </div>
    </li>
);

export default Project;