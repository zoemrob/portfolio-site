import {Link} from 'inferno-router';
import '../styles/Header.css';

const Header = ({viewportSize}) => (
    <header className="App-header">
        <h1>
            Zoe Robertson
        </h1>
        {viewportSize === ''}
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
);
export default Header;