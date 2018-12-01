import ImageContainer from '../ImageContainer';
import PsuedoTyped from '../PsuedoTyped';
import '../../styles/Bio.css';
import Rule from "../Rule";

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

const Bio = () => (
    <main>
        <section className="bio-container">
            <PsuedoTyped
                input="Made in Portland, OR"
                node="h2"
                $props={{className: 'bio-header', id: 'bio-header'}}
                blinkOnFinish={false}
            />
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
                <h3>Yes, I'm another hipster web dev...</h3>
                <p id="p1">
                    I enjoy "real" coffee, <a href="https://www.townshendstea.com/">Townshend's Tea Company</a>,
                </p>
            </article>
        </section>
    </main>
);

export default Bio;