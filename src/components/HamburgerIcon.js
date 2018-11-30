import '../styles/HamburgerIcon.css';

const HamburgerIcon = ({navOpen, handler}) => {
    const idx = window.innerWidth < 770 ? "1" : null;
    const hamClass = "hamburger" + (navOpen ? " open" : "");
    return (
        <div id="hamburger-btn"
             className={hamClass}
             tabIndex={idx}
             onClick={handler}
             role="button"
        >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
};

export default HamburgerIcon;