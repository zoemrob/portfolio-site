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

import {Component} from 'inferno'; // or import {Component, createElement} from 'react';
import {createElement} from 'inferno-create-element';

export default class PsuedoTyped extends Component {
    constructor(props) {
        super(props);

        // include cursor character initially so container keeps size
        this.state = {
            curString: PsuedoTyped.CURSOR
        };
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
    _psuedoType(inputString, i = 0) {
        const inputLen = inputString.length;
        // trim cursor character
        const curString = this.state.curString.slice(0, -1);
        const strLen = curString.length;

        if (inputLen > strLen) {
            const {typeSpeed} = this.props;
            // append next character and cursor
            const newStr = curString + inputString[i] + PsuedoTyped.CURSOR;
            i++;

            // if final sequence, queue up last character 200ms later
            if (inputLen - strLen === 1) {
                setTimeout(() => {
                    this.setState({curString: inputString + PsuedoTyped.CURSOR});
                    this._psuedoType(inputString);
                }, (typeSpeed * 2));

            } else {
                setTimeout(() => {
                    this.setState({curString: newStr});
                    this._psuedoType(inputString, i);
                }, typeSpeed);
            }

        } else {
            const {blinkSpeed} = this.props;

            if (this.state.curString.slice(-1) === PsuedoTyped.CURSOR) {
                setTimeout(() => {
                    this.setState({curString: inputString + ' '});
                    this._psuedoType(inputString);
                }, blinkSpeed);

            } else if (this.props.blinkOnFinish){
                setTimeout(() => {
                    this.setState({curString: inputString + PsuedoTyped.CURSOR});
                    this._psuedoType(inputString);
                }, blinkSpeed);
            }
        }
    }

    componentDidMount() {
        // start method
        this._psuedoType(this.props.input);
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