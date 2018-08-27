import React, { Component } from 'react';
import './OtherLocations.css';
import Footer from '../homepage/Footer';
import LocationModule from './LocationModule';


class OtherLocations extends Component {
    render() {
        return (
            <div>


                <div className="other-location-top">

                        <div className="white-background">
                            <span className="title-text">Other Locations</span>
                            <div className="locations-module-container">
                                <LocationModule name={"Dougies BBQ Teaneck"} address={"184 West Englewood Ave"} 
                                    number={"201-833-6000"}/>
                                <LocationModule name={"Dougie's BBQ Deal"} address={"256 Norwood Ave"} 
                                    number={"732-517-0300"}/>
                                <LocationModule name={"Dougie's BBQ Great Neck"} address={"105 Middle Neck Rd"} 
                                    number={"516-773-3684"}/>
                                <LocationModule name={"Dougie's BBQ Baltimore"} address={"600 Riesterstown Road"} 
                                    number={"410-DOUGIES"}/>
                            </div>
                        </div>

                </div>

                {/* <div className="body-bottom">
                </div> */}

                <div className="body-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default OtherLocations;
