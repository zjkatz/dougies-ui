import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="social-media-list">
                    <span className="social-media-title">
                        Stay Connected
                        </span>
                    <div className="social-media-icon-list">
                        <ul className="social-media-icon-list-html">
                            <li>
                                <a className="" href={"https://www.facebook.com/dougiesbbq/"}>
                                    <div className="social-media-icon facebook" />
                                </a>
                            </li>
                            <li>
                                <a className="" href={"https://www.facebook.com/dougiesbbq/"}>
                                    <div className="social-media-icon twitter" />
                                </a>
                            </li>
                            <li>
                                <a className="" href={"https://www.facebook.com/dougiesbbq/"}>
                                    <div className="social-media-icon instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="inquiries-footer social-media-list">
                    <span className="inquiries-text">For general infomation contact us at:</span>
                    <a href="mailto:info@dougiesbbq.com" target="_top">
                        info@dougiesbbq.com
                            </a>
                </div>

                <div className="copyright-footer">
                    <span className="copyright-text">© 2006 Dougies BBQ, Inc. All Rights Reserved. E-mail:</span>
                </div>
            </div>
        );
    }
}

export default Footer;
