const imagePrefix = '/images/';
export const prefix = img => imagePrefix + img;

const ImageContainer = ({figId, figCap = '', figCapPos = 'top', imgAlt, imgSrcSet, imgSizes = null}) => {
    const figCaption = (<figcaption>{figCap}</figcaption>);
    return (
        <figure id={figId}>
            {figCapPos === 'top' && figCaption}
            <picture>
                <img
                    srcSet={imgSrcSet && imgSrcSet.map(prefix).join(',')}
                    sizes={imgSizes && imgSizes.map(prefix).join(',')}
                    alt={imgAlt}
                    title={imgAlt}
                />
            </picture>
            {figCapPos === 'bottom' && figCaption}
        </figure>
    );
};
export default ImageContainer;