import React from 'react';
import {empty} from "../../../portfolio-site/src/utils";

const imagePrefix = '/images/';

export const prefix = img => imagePrefix + img;

const ImageContainer = ({figId, imgAlt, imgSrcSet, figCap = '', figCapPos = 'top', imgSizes = null, lazy = false}) => {
    const figCaption = !empty(figCap) ? (<figcaption>{figCap}</figcaption>) : null;
    return (
        <figure id={figId}>
            {figCapPos === 'top' && figCaption}
            <picture>
                <img
                    srcSet={imgSrcSet && imgSrcSet.map(prefix).join(',')}
                    sizes={imgSizes && imgSizes.map(prefix).join(',')}
                    alt={imgAlt}
                    title={imgAlt}
                    className={lazy ? "lazy" : null}
                />
            </picture>
            {figCapPos === 'bottom' && figCaption}
        </figure>
    );
};
export default ImageContainer;