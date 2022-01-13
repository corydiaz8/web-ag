import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../../mobile-app/feature-section/_feature.css';
import include_img from '../../../assets/images/include.png';

class Feature extends Component {


    render() {
        return (
            <section className="feature-section">
                <div className="container-fluid big-container">
                    <div className="row">
                        <div className="col-xl-5 col-12 c-darkBlue mobile_grey-text">
                            <h2 className="feature-section__title fs44">Empower your clients and your team.</h2>
                            <p className="feature-section__txt fs18">
                                Analytics and Mobile is the winning combination to sell more policies and enhance
                                customer experience.
                            </p>
                            <p className="feature-section__txt fs18">
                                Agentero provides your agency with a branded app to reduce costs and improve client
                                retention.
                            </p>
                            <Link id='btnLearnAnBundle' to='mobile-app' className="btn btn-learn c-green-border c-green fs18">Learn
                                    more
                            </Link>
                        </div>
                        <div className="offset-xl-1 col-xl-6 col-12 text-xl-right text-center">
                            <img src={include_img} alt="include" className="feature-section__diagram"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Feature;
