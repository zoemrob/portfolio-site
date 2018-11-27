import ImageContainer from '../ImageContainer';
import PsuedoTyped from '../PsuedoTyped';

const imgSrcSet = [
    'portland-sign_grmtn4_c_scale,w_200.jpg 200w',
    'portland-sign_grmtn4_c_scale,w_579.jpg 579w',
    'portland-sign_grmtn4_c_scale,w_832.jpg 832w',
    'portland-sign_grmtn4_c_scale,w_1055.jpg 1055w',
    'portland-sign_grmtn4_c_scale,w_1271.jpg 1271w',
    'portland-sign_grmtn4_c_scale,w_1400.jpg 1400w'
];

const imgSizes = [
    '(max-width: 1400px) 100vw, 1400px'
];

const Bio = ({viewportSize}) => (
    <main>
        <div className="bio-container">
            <PsuedoTyped input="Made in Portland, OR" node="h2" className="bio-header"/>
            <ImageContainer
                figId="portland-pic"
                figCap="The tech hub that's so indie, you probably haven't heard of it"
                figCapPos="bottom"
                imgAlt="Portland, OR sign"
                imgSizes={imgSizes}
                imgSrcSet={imgSrcSet}
            />
        </div>
    </main>
);

export default Bio;