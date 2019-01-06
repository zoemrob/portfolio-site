import {useState} from 'react';
//todo: switch to useRef
function useHandlerCache () {
    const [cache, setCache] = useState({});

    function addToCache(key, item) {
        setCache({
            ...cache,
            [key]: item
        });
    }

    return [cache, addToCache];
}

export default useHandlerCache;