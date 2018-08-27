import React, { Component } from 'react';
import Header from './homepage/Header';
import Body from './Body';
import './Homepage.css';


class Homepage extends Component {
    render() {
        return (
            <div id="home">
                <div className="header-container">
                    <Header />
                </div>
                <div className="body-container">
                    <Body />
                    

                </div>





            </div>
        );
    }
}

export default Homepage;
