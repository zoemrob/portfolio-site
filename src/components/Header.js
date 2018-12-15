import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';
import '../styles/Header.css';

const navItemClass = "nav-item";
const openClass = "nav-open";
const burgerId = "hamburger-btn";

const Header = React.memo(() => {
    const [navOpen, setNavOpen] = useState(false);

    const childHandler = () => setNavOpen(!navOpen);

    const checkOutsideClick = useCallback(e => {
        if (e.target.id !== burgerId && e.target.parentElement.id !== burgerId) {
            setNavOpen(false);
        }
    }, [setNavOpen]);

    useEffect(() => {
        document.addEventListener('click', checkOutsideClick);
        return function cleanup() {
            document.removeEventListener('click', checkOutsideClick);
        }
    }, []);

    const liClass = navItemClass + (navOpen ? " " + openClass : "");
    const headerClass = "App-header" + (navOpen ? " " + openClass : '');
    return (
        <header className={headerClass}>
            <h1>
                Zoe Robertson
            </h1>
            <nav>
                <ul className={navOpen ? openClass : null}>
                    <li className={liClass}><Link to="/">Home</Link></li>
                    <li className={liClass}><Link to="/bio">Bio</Link></li>
                    <li className={liClass}><Link to="/projects">Projects</Link></li>
                    <li className={liClass}><Link to="/contact">Contact</Link></li>
                </ul>
                <HamburgerIcon navOpen={navOpen} handler={childHandler} />
            </nav>
        </header>
    );
});
export default Header;