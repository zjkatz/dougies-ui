import React, { Component } from 'react';
import './FeatureBox.css';


class FeatureBox extends Component {
    render() {
        return (
            <div className="box">
                <div className="box-background-container">
                    <img className="box-background" src={require('../images/' + this.props.imgSrc)} />
                    <div className="box-footer">
                        <span>{this.props.subText}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureBox;
