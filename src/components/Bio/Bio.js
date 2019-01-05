import React from 'react';
import ImageContainer from '../ImageContainer';
import usePsuedoType from "../../hooks/usePseudoType";
import Rule from "../Rule";
import IconHolder from "../IconHolder";
import '../../styles/Bio.css';

const imgSrcSet = [
    'portland-sign_grmtn4_c_scale,w_200.jpg 200w',
    'portland-sign_grmtn4_c_scale,w_579.jpg 579w',
    'portland-sign_grmtn4_c_scale,w_832.jpg 832w',
    'portland-sign_grmtn4_c_scale,w_1055.jpg 1055w',
];

const imgSizes = [
    '(max-width: 1600px) 100vw, 1055px',
    '(max-width: 700px) 700px, 400px',
];

const Bio = () => {
    const psuedo = usePsuedoType("Made in Portland, OR", 100);
    return (
        <main>
            <section className="bio-container">
                <h2 className="bio-header" id="bio-header">
                    {psuedo}
                </h2>
                <ImageContainer
                    figId="portland-pic"
                    figCap="The tech hub that's so indie, you probably haven't heard of it."
                    figCapPos="bottom"
                    imgAlt="Portland, OR sign"
                    imgSizes={imgSizes}
                    imgSrcSet={imgSrcSet}
                />
                <Rule/>
                <article className="bio-art">
                    <h3>I grew up in Portland,</h3>
                    <p id="p1">
                        The home of <a href="https://www.townshendstea.com/">Townshend's Tea Company</a>, <a href="http://oakspark.com/site/roller-skating-rink.html">Oaks Park Roller Rink</a>, <a href="https://www.stumptowncoffee.com/">Stumptown Coffee Roasters</a>, and <a href="https://www.youtube.com/channel/UCBTTI-zUgbt8whLszMqjvZw">The Unipiper</a>. As such, I developed a standard bias against <strong>The Mainstream</strong> <em>(Portland's greatest enemy)</em> and a healthy measure of non-conformity. These values spilled over into my career as a developer. While I've resigned that sometimes the <em>standard</em> way to do something is in fact the right way, I approach every problem asking myself:
                    </p>
                    <ul>
                        <li>"Is there a better way to do this?",</li>
                        <li>"Will this implementation work for future requirements?",</li>
                        <li>and the developer's creed, "Can this be automated?"</li>
                    </ul>
                    <p id="p2">
                        My journey to web development started with a kind of personal accounting. I was at a new stage in life, I had gathered a handful of entry-level tech jobs on my resumé, but had no clear career path moving forward. I remember an article that shocked me with a statistic: <em>"...it’s projected that 1.4 million positions will be open in computing with only 400,000 computer science grads."</em> (<a href="https://techcrunch.com/2016/01/12/unlocking-trapped-engineers/">source</a>). Programming had always fascinated me, and I remember my Intro to Web Development course in High School had been interesting, but I wrote off programming as something I could only do with a college degree. Inspired, I decided to give it a shot and enrolled in the <a href="https://flatironschool.com/free-courses/coding-bootcamp-prep/">Flatiron School Bootcamp Prep</a> course online.
                    </p>
                    <p id="p3">
                        <span>I was fascinated.</span> It all came so naturally; how all the interconnected pieces and overarching concepts wove together into a complete program... After completing that free course, I began to dive into reading both the MDN Forum and PHP Manual online. It was initially a rough start, <span className="inline-code">array array_column ( array $input , mixed $column_key [, mixed $index_key = NULL ] )</span> is hard to understand with no explanation, but I pulled through!
                    </p>
                    <p id="p4">
                        After several months of working through manuals and forums, through project successes and project failures, I reached that <em>stuck</em> point. The Javascript prototype chain, for example, melted my brain. But another opportunity to learn showed up on my Facebook: <a href="https://www.udacity.com/grow-with-google">Grow With Google and Udacity</a> Challenge Scholarship. There was a relatively simple application process, a couple of basic Javascript questions and a standard form, and after a couple week waiting period, I received my notice! I, along with 25000 other students, had been admitted to the first round of the program. This involved 3 months of coursework, a deep-dive into HTML and CSS, and another overview of Javascript. From here, Udacity selected the top 10% of students to grant a full scholarship to the <a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">Front End Web Developer Nanodegree</a>. 6 months later, I completed the Nanodegree with a portfolio of skills and projects to show for it!
                    </p>
                    <p id="p-footer">In all of this, I learned that discipline, persistence and a knack for problem solving are the key skills that make a developer. Not merely a college degree.</p>
                </article>
            </section>
            <footer>
                <IconHolder/>
                <div className="footer">Zoe Robertson - 2018</div>
            </footer>
        </main>
    );
}

export default Bio;