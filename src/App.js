import {Component} from 'inferno';
import {Route} from 'inferno-router';
import * as utils from './utils';
import Header from './components/Header';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewportSize: utils.checkWidth(),
        };

        this._isMounted = false;
    }

    _widthHandler = (e) => {
        console.log(this.state.viewportSize);
        this.setState({viewportSize: utils.checkWidth()});
    };

    componentDidMount() {
        this._isMounted = true;

        window.addEventListener('resize', this._widthHandler);
    }

    componentWillUnmount() {
        this._isMounted = false;

        window.removeEventListener('resize', this._widthHandler);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}

export default App;
