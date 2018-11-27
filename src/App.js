import {Component} from 'inferno';
import {Route} from 'inferno-router';
import {Helmet} from 'inferno-helmet';
import * as utils from './utils';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Bio from "./components/Bio/Bio";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewportSize: utils.checkWidth(),
        };

        this._isMounted = false;
    }

    _widthHandler = () => {
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
                <Helmet>
                    <link rel="prefetch" href="/images/portland-sign_grmtn4_c_scale,w_1271.jpg" />
                </Helmet>
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/bio" component={Bio}/>
            </div>
        );
    }
}

export default App;
