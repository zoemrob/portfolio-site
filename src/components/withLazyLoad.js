import React from 'react';

function lazyLoad() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in  window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        let active = false;

        const lazyLoader = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.srcset = lazyImage.dataset.srcset;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoader);
                                window.removeEventListener("resize", lazyLoader);
                                window.removeEventListener("orientationchange", lazyLoader);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoader);
        window.addEventListener("resize", lazyLoader);
        window.addEventListener("orientationchange", lazyLoader);
    }
}

export function withLazyLoad(WrappedComponent) {
    return (props) => (
        <WrappedComponent
            onComponentDidMount={lazyLoad}
            {...props}
        />
    );
}