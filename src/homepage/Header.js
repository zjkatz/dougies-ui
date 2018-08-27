import React, { Component } from 'react';
import './Header.css';
import { Route, Link } from 'react-router-dom';
import logo from '../images/Dougies-Logo.png';
import pdfSBMenu from '../pdfs/2018SUPERBOWL.pdf'; 
import pdfMenu from '../pdfs/_menu08.pdf';

import MobileHeader from './MobileHeader';

class Header extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }
    hideMobileMenu() {
        document.getElementById("toggle-mobile-menu").classList.add("hide");
        document.getElementById("toggle-options-menu").classList.remove("clicked");
        document.getElementById("toggle-options-x").classList.add("clicked");
    }

    render() {
        return (
            <div className="header">

                {/* <div className="options-menu">
                    <div className="white-stripe" />
                    <div className="white-stripe" />
                    <div className="white-stripe" />
                </div> */}
                <MobileHeader className="mobile-header" />

                <div className="logo" onClick={this.hideMobileMenu}>
                <Link to="/" >
                    <img src={logo} alt={"logo"}/> 
                    </Link>
                </div>
                <div className="nav-container">
                    <ul className="menu">
                        <li className="menu__item">
                            {/* <Link to="/menu" >Menu</Link> */}
                            <a href={pdfMenu}>Menu</a>
                        </li>
                        <li className="menu__item">
                            {/* <Link to="/orderOnline" >
                                Online Ordering
                            </Link> */}
                            <a href={"https://www.letsget.net/(S(yy5n1ssple5appfojuin1v4f))/Public/ChooseOrderTypeG.aspx"}>
                                Online Ordering
                            </a>
                        </li>
                        <li className="menu__item">
                            {/* <Link to="/superBowl" >
                                Super Bowl
                            </Link> */}
                            <a href={pdfSBMenu}>Super Bowl</a>
                        </li>
                        <li className="menu__item">
                            <Link to="/otherLocations" >
                                Other Locations
                            </Link>
                        </li>
                    </ul>
                    {/* <div className="order-button">
                        order
                </div> */}
                </div>
            </div>
        );
    }
}

export default Header;
