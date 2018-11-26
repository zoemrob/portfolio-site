import {Component} from 'inferno';
import {createElement} from 'inferno-create-element';

export default class PsuedoTyped extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curString: ''
        };
    }

    _psuedoType(inputString, i = 0) {
        const inputLen = inputString.length;
        let {curString} = {...this.state};
        const strLen = curString.length;

        if (inputLen > strLen) {
            const newStr = curString + inputString[i];
            i++;
            setTimeout(() => {
                this.setState({curString: newStr});
                this._psuedoType(inputString, i);
            }, 100);
        }
    }

    componentDidMount() {
        this._psuedoType(this.props.input);
    }

    render() {
        const {node} = this.props;
        const {curString} = this.state;
        return createElement(node, null, curString);
    }
}