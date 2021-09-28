import './Header.css';

function Header() {
    return (
        <div className="headerWrapper">
            <div className="menuWrapper">
                <div className="logo"></div>
                <div className="menu">
                    <p>About</p>
                    <p>Discover</p>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    );
}

export default Header;