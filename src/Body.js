import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from './homepage/Menu';
import './Body.css';
import Homepage from './Homepage';
import FeatureBox from './homepage/FeatureBox';
// import pdfMenu from '../pdfs/_menu08.pdf';

import OtherLocations from './otherLocationsPage/OtherLocations';
import HomepageContent from './homepage/HomepageContent';

class Body extends Component {
    render() {
        return (
            <div className="body">

                <Route exact path="/" component={HomepageContent} />
                {/* <Route path="/menu" component={Menu} /> */}
                {/* <Route path="/orderOnline" component={OrderOnline} /> */}
                {/* <Route path="/superBowl" component={SuperBowl} /> */}
                <Route path="/otherLocations" component={OtherLocations} />

            </div>
        );
    }
}

export default Body;
