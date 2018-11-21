const imagePrefix = '/images/';

const ImageContainer = ({figId, figCap = '', figCapPos = 'top', imgAlt, imgSrcSet, imgSizes = null}) => {
    const figCaption = (<figcaption>{figCap}</figcaption>);
    return (
        <figure id={figId}>
            {figCapPos === 'top' && figCaption}
            <picture>
                <img
                    srcSet={imagePrefix + imgSrcSet.join(',')}
                    sizes={imgSizes && imgSizes.join(',')}
                    alt={imgAlt}
                    title={imgAlt}
                />
            </picture>
            {figCapPos === 'bottom' && figCaption}
        </figure>
    );
};
export default ImageContainer;