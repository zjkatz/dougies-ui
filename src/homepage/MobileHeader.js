import React, { Component } from 'react';
import './MobileHeader.css';
import pdfSBMenu from '../pdfs/2018SUPERBOWL.pdf';
import pdfMenu from '../pdfs/_menu08.pdf';
import { Route, Link } from 'react-router-dom';


class MobileHeader extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        document.getElementById("toggle-mobile-menu").classList.toggle("hide");
        document.getElementById("toggle-options-menu").classList.toggle("clicked");
        document.getElementById("toggle-options-x").classList.toggle("clicked");
    }
    render() {


        // Detect all clicks on the document
        // document.addEventListener("click", function (e) {
        //     if(e.target.className !== "options-menu") {
        //         document.getElementById("toggle-mobile-menu").classList.add("hide");
        //     } 
        // });


        return (
            <div>
                <div className="options-menu" id="toggle-options-menu" onClick={this.toggleMobileMenu}>
                    <div className="white-stripe" />
                    <div className="white-stripe" />
                    <div className="white-stripe" />
                </div>

                <div className="options-menu clicked" id="toggle-options-x" onClick={this.toggleMobileMenu}>
                    <span className="x-button-close">X</span>
                </div>

                <div className="mobile-friendly-menu hide" id="toggle-mobile-menu" onClick={this.toggleMobileMenu}>
                    <ul className="dropdown-list">
                        <li className="dropdown-list-element">
                            {/* <Link to="/menu" >Menu</Link> */}
                            <a className="dropdown-element-text-background" href={pdfMenu}>
                                <span className="dropdown-element-text">
                                    Menu
                                </span>
                            </a>
                        </li>
                        <li className="dropdown-list-element">
                            {/* <Link to="/orderOnline" className="dropdown-element-text-background"> */}
                            <a href={"https://www.letsget.net/(S(yy5n1ssple5appfojuin1v4f))/Public/ChooseOrderTypeG.aspx"} 
                            className="dropdown-element-text-background">
                                <span className="dropdown-element-text">
                                    Online Ordering
                                </span>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="dropdown-list-element">
                            {/* <Link to="/superBowl" >
                                Super Bowl
                            </Link> */}
                            <a className="dropdown-element-text-background" href={pdfSBMenu}>
                                <span className="dropdown-element-text">
                                    Super Bowl
                                </span>
                            </a>
                        </li>
                        <li className="dropdown-list-element">
                            <Link to="/otherLocations" className="dropdown-element-text-background">
                                <span className="dropdown-element-text">
                                    Other Locations
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MobileHeader;
