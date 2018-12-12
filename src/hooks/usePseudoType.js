import {useEffect, useState, useRef} from 'react';
import PsuedoTyped from "../components/PsuedoTyped";

const CURSOR = '|';

function usePsuedoType(input, typeSpeed = 75) {
    const [curString, setCurString] = useState(CURSOR);
    const curTimeout = useRef(null);
    const i = useRef(0);
    const inputLen = input.length;

    useEffect(() => {
        const current = curString.slice(0, -1);
        const curLen = curString.length;
        if (inputLen > curLen) {
            const newStr = current + input[i.current] + CURSOR;

            if (inputLen - curLen === 1) {
                curTimeout.current = setTimeout(() => {
                    i.current++;
                    setCurString(input + CURSOR);
                }, (typeSpeed * 2));
            } else {
                curTimeout.current = setTimeout(() => {
                    i.current++;
                    setCurString(newStr);
                }, typeSpeed);
            }
        } else {
            if (curString.slice(-1) === PsuedoTyped.CURSOR) {
                curTimeout.current = setTimeout(() => {
                    setCurString(input + ' ');
                }, typeSpeed);
            }
        }

        return () => clearTimeout(curTimeout.current);
    });

    return curString;
}

export default usePsuedoType;