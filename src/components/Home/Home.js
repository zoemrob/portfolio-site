import React from 'react';
import SkillsHolder from './SkillHolder';
import ImageContainer from '../ImageContainer';
import {makeSkill} from "./Skill";
import {makeAward} from "./Award";
import IconHolder from "../IconHolder";
import '../../styles/Home.css';
import usePsuedoType from "../../hooks/usePseudoType";

const skillsTech = [
    {name: 'JavaScript (ES6/7, Node.js)', exp: 1},
    {name: 'React.js (& Inferno.js)'},
    {name: 'PHP (7.x)', exp: 1},
    {name: 'Custom Shopify Themes'},
    {name: 'MongoDB', exp: 1},
    {name: 'JS Build Tools (Gulp.js, Webpack)'},
    {name: 'CSS & CSS Preprocessors'},
    {name: 'SQL (Postgres, SQL Server)'},
    {name: 'Bash (Unix Terminal)'},
];

const skillsSoft = [
    {name: 'Self-Motivated Learner'},
    {name: 'Customer Service', exp: 5},
    {name: 'Technical Troubleshooting', exp: 3},
];

const awards = [
    {
        title: 'Udacity Front End Web Developer Nanodegree',
        details: 'Earned a scholarship through Grow With Google for the Udacity Front End Web Developer Nanodgree, which covers a range of topics from Responsive Web Design to Front-end frameworks and Progressive Web Apps.',
        certificateLink: 'https://confirm.udacity.com/ACVVDXUY',
        date: 'November, 2018'
    },
    {
        title: 'Triplebyte',
        details: 'Passed the Triplebyte technical assessment and interview for Front End Engineering. 3% Acceptance Rate.',
        certificateLink: 'https://triplebyte.com/certificate/RknBVwk',
        date: 'November, 2018'
    },
];

const imgSrcSet = [
    'zoe-photo--cropped-2-large.jpg 678w',
    'zoe-photo--cropped-2-small.jpg 484w',
    'zoe-photo--cropped-2-xsmall.jpg 385w'
];

const imgSizes = [
    '(max-width: 380px) 360px',
    '(max-width: 420px) 400px',
    '(max-width: 770px) 660px',
    '(min-width: 1024px) 800px',
];

const Home = () => {
    const typedVal = usePsuedoType('You can use JavaScript for that...');

    return (
        <main>
            <div className="personal-container">
                <ImageContainer
                    figId="personal-img"
                    figCap="Front End Web Developer"
                    figCapPos="top"
                    imgAlt="A photo of Zoe Robertson"
                    imgSizes={imgSizes}
                    imgSrcSet={imgSrcSet}
                />
                <p className="home-typed">{typedVal}</p>
                <IconHolder/>
            </div>
            <div className="skill-container">
                <SkillsHolder id="tech-skills" skillsTitle="Technologies">
                    {skillsTech.map(makeSkill)}
                </SkillsHolder>
                <SkillsHolder id="soft-skills" skillsTitle="Soft Skills">
                    {skillsSoft.map(makeSkill)}
                </SkillsHolder>
                <SkillsHolder id="certificates" skillsTitle="Certifications & Awards">
                    {awards.map(makeAward)}
                </SkillsHolder>
                <footer>
                    <div className="footer">Zoe Robertson - 2018</div>
                </footer>
            </div>
        </main>
    );
}

export default Home;