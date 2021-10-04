import './HeaderMobile.css';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import { useEffect } from 'react';

const HeaderMobile = (props) => {
    return (
        <div className="headerMobileWrapper">
            <div className="headerMobileInnerWrapper">
                <img src={logo} alt="logo" className="logoMobile"></img>
                <img src={hamburger} alt="hamburger" className="hamburger" onClick={props.handleMobileMenu}></img>
            </div>
            <div className="menuWrapperMobile">
                <div className={`menuMobile ${props.mobileMenu === true ? "menuMobileActivated" : "null"}`}>
                    <p>About</p>
                    <hr></hr>
                    <p>Discover</p>
                    <hr></hr>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile;