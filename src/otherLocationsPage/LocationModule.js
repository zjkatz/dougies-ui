import React, { Component } from 'react';
import './LocationModule.css';
import { Link } from 'react-router-dom';

class LocationModule extends Component {
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
            <div className="location-module" onClick={this.hideMobileMenu}>
                <Link to="/" className="location-module-container-link">
                    <div className="location-module-container">
                        <div className="location-module-text-container">
                            <span className="location-module-text">
                                {this.props.name}
                            </span>
                            <br />
                            <span className="location-module-text">
                                {this.props.address}
                            </span>
                            <br />
                            <span className="location-module-text">
                                {this.props.number}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LocationModule;
