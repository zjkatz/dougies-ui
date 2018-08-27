import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import './HomepageContent.css';
import Homepage from './Homepage';
import FeatureBox from './FeatureBox';
import pdfMenu from '../pdfs/_menu08.pdf';
import Footer from './Footer';

class HomepageContent extends Component {
    render() {
        return (
            <div>

                <div className="body-top">
                    <div className="body-top-container">
                        <div className="title-text">
                            <span className="title-text-header">What's New</span>
                        </div>
                        <div className="box-container">

                            {/* <div className="box">
                                <div className="box-one">
                                    <div className="box-footer">
                                        <span>Healthy Options</span>
                                    </div>
                                </div>
                            </div>


                            <div className="box">
                                <div className="box-two">
                                    <div className="box-footer">
                                        <span>Season Specials</span>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="box-three">
                                    <div className="box-footer">
                                        <span>Cater Your Event</span>
                                    </div>
                                </div>
                            </div> */}


                            {/* <div className="box">
                                <img className="box-background" src={require('../images/lukas-blazek-261682-unsplash.jpg')} />
                                <div className="box-footer">
                                        <span>Healthy Options</span>
                                </div>
                            </div>

                            <div className="box">
                                <img className="box-background" src={require('../images/dragne-marius-117368-unsplash.jpg')} />
                                <div className="box-footer">
                                        <span>Season Specials</span>
                                </div>
                            </div>
                            
                            <div className="box">
                                <img className="box-background" src={require('../images/danny-gallegos-376799-unsplash.jpg')} />
                                <div className="box-footer">
                                        <span>Cater Your Event</span>
                                </div>
                            </div> */}

                            <FeatureBox imgSrc={'lukas-blazek-261682-unsplash.jpg'} subText={"Healthy Options"} />
                            <FeatureBox imgSrc={'dragne-marius-117368-unsplash.jpg'} subText={"Season Specials"} />
                            <FeatureBox imgSrc={'danny-gallegos-376799-unsplash.jpg'} subText={"Cater Your Event"} />



                        </div>
                    </div>
                </div>
                <div className="body-bottom">
                    <div className="title-text">
                        <a className="title-text-header menu-text-background" href={pdfMenu}>See Our Menu</a>
                        {/* <span className="title-text-header menu-text-background">See Our Menu</span> */}
                    </div>

                    <div className="catering-container">
                        <div className="catering-text-container">
                            <span className="catering-text full-catering-text">For CATERING In Manhattan</span>

                            <span className="catering-text mobile-friendly-catering-text">For CATERING</span>
                            <span className="catering-text mobile-friendly-catering-text">In Manhattan</span>

                            <span className="catering-text">Call 212-724-2222</span>
                        </div>
                    </div>
                </div>
                <div className="body-footer">
                    <Footer />
                </div>

            </div>
        );
    }
}

export default HomepageContent;
