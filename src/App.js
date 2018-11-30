import {Component} from 'inferno';
import {Route} from 'inferno-router';
import {Helmet} from 'inferno-helmet';
import * as utils from './utils';
import './App.css';
import HeaderState from './components/HeaderState';
import Home from './components/Home/Home';
import Bio from "./components/Bio/Bio";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewportSize: utils.checkWidth(),
        };
    }

    _widthHandler = () => {
        //console.log(this.state.viewportSize);
        this.setState({viewportSize: utils.checkWidth()});
    };

    componentDidMount() {
        window.addEventListener('resize', this._widthHandler);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.viewportSize !== this.state.viewportSize) console.log(this.state.viewportSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._widthHandler);
    }

    render() {
        return (
            <div className="App">
                <Helmet>
                    <link rel="prefetch" href="/images/portland-sign_grmtn4_c_scale,w_1271.jpg" />
                </Helmet>
                <HeaderState />
                <Route exact path="/" component={Home}/>
                <Route path="/bio" component={Bio}/>
            </div>
        );
    }
}

export default App;