/**
 * Lightweight Component to simulate typing into an element
 * Inferno & React compatible.
 *
 * @props
 * input: String (required)
 * node: String (required)
 * $props: Object
 * typeSpeed: Number
 * blinkSpeed: Number
 * blinkOnFinish: Boolean
 *
 * Author: Zoe Robertson <https://github.com/zoemrob>
 */

import {Component, createElement} from 'react';

export default class PsuedoTyped extends Component {
    constructor(props) {
        super(props);

        // include cursor character initially so container keeps size
        this.state = {
            curString: PsuedoTyped.CURSOR
        };

        this.i = 0;
    }

    /**
     * Cursor character
     * @type {string}
     */
    static CURSOR = '|';

    /**
     * Recursive function which simulates typing of a string
     * @param inputString {String}
     * @param i {Number}
     * @return void
     */
    _psuedoType(inputString) {
        const inputLen = inputString.length;
        // trim cursor character
        const curString = this.state.curString.slice(0, -1);
        const strLen = curString.length;

        if (inputLen > strLen) {
            const {typeSpeed} = this.props;
            // append next character and cursor
            const newStr = curString + inputString[this.i] + PsuedoTyped.CURSOR;
            this.i++;

            // if final sequence, queue up last character 200ms later
            if (inputLen - strLen === 1) {
                setTimeout(() => {
                    if (this._isMounted) {
                        this.setState({curString: inputString + PsuedoTyped.CURSOR});
                        //this._psuedoType(inputString);
                    }
                }, (typeSpeed * 2));

            } else {
                setTimeout(() => {
                    if (this._isMounted) {
                        this.setState({curString: newStr});
                        //this._psuedoType(inputString, i);
                    }
                }, typeSpeed);
            }

        } else {
            const {blinkSpeed} = this.props;

            if (this.state.curString.slice(-1) === PsuedoTyped.CURSOR) {
                setTimeout(() => {
                    if (this._isMounted) {
                        this.setState({curString: inputString + ' '});
                        //this._psuedoType(inputString);
                    }
                }, blinkSpeed);

            } else if (this.props.blinkOnFinish){
                setTimeout(() => {
                    if (this._isMounted) {
                        this.setState({curString: inputString + PsuedoTyped.CURSOR});
                        //this._psuedoType(inputString);
                    }
                }, blinkSpeed);
            }
        }
    }

    componentDidMount() {
        this._isMounted = true;
        // start method
        this._psuedoType(this.props.input);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.curString !== prevState.curString) {
            this._psuedoType(this.props.input);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        const {node, $props} = this.props;
        const {curString} = this.state;
        return createElement(node, $props, curString);
    }
}

PsuedoTyped.defaultProps = {
    typeSpeed: 100,
    blinkSpeed: 500,
    blinkOnFinish: true
};