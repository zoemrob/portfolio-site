import {Route} from 'inferno-router';
import {Helmet} from 'inferno-helmet';
import './App.css';
import HeaderState from './components/HeaderState';
import Home from './components/Home/Home';
import Bio from "./components/Bio/Bio";
import {prefix} from "./components/ImageContainer";

const App = () => (
    <div className="App">
        <Helmet>
            <link rel="prefetch" href={prefix("portland-sign_grmtn4_c_scale,w_1271.jpg")}/>
        </Helmet>
        <HeaderState/>
        <Route exact path="/" component={Home}/>
        <Route path="/bio" component={Bio}/>
    </div>
);

export default App;