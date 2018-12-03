import {Route} from 'inferno-router';
import {Helmet} from 'inferno-helmet';
import HeaderState from './components/HeaderState';
import Home from './components/Home/Home';
import Bio from './components/Bio/Bio';
import LazyProjects from './components/Projects/Projects';
import {prefix} from './components/ImageContainer';
import './App.css';

const App = () => (
    <div className="App">
        <Helmet>
            <link rel="prefetch" href={prefix("portland-sign_grmtn4_c_scale,w_1271.jpg")}/>
        </Helmet>
        <HeaderState/>
        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/projects" component={LazyProjects} />
    </div>
);

export default App;