import {Component, linkEvent} from 'inferno';
import Header, {navClasses} from './Header';

function handleClick(instance) {
    console.log(instance.state.navOpen);
    instance.setState({navOpen: !instance.state.navOpen});
}

const burgerId = "hamburger-btn";
// todo: handle clicks outside of target node to set navOpen: false, look into linkEvent to window

export default class HeaderState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false
        };
    }

    checkOutsideClick = e => {
        if (e.target.className === navClasses || e.target.parentElement.className === navClasses) {
            setTimeout(() => this.setState({navOpen: false}), 300);
        }
        if (e.target.id !== burgerId && e.target.parentElement.id !== burgerId) {
            this.setState({navOpen: false});
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.checkOutsideClick);
    }

    shouldComponentUpdate(nextProps, nextState, context) {
        return nextState !== this.state;
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.checkOutsideClick);
    }

    render() {
        return <Header handler={linkEvent(this, handleClick)} {...this.state}/>;
    }
}