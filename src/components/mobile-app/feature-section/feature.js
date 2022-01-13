import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './_feature.css';
import include_img from '../../../assets/images/include.png';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.scrollToTop = this.scrollToTop.bind(this)   // Create a ref object

    }


    scrollToTop = () => {
        window.scrollTo(0, 0)

    }

    render() {
        return (
            <section className="feature-section">
                <div className="container-fluid big-container">
                    <div className="row">
                        <div className="col-xl-5 col-12 c-darkBlue mobile_grey-text">
                            <h2 className="feature-section__title fs44">A complete solution to grow your agency.</h2>
                            <h3 className="feature-section__title fs44 font-bold">All in one platform.</h3>
                            <p className="feature-section__txt fs18">
                                Mobile and Analytics is the winning combination to boost your sales and delight your
                                clients.
                            </p>
                            <p className="feature-section__txt fs18">
                                Agentero provides your team with data-driven sales opportunities delivered at the right
                                time to sell more policies.
                            </p>
                            <Link id="btnLearnMobBundle" to='analytics' className="btn cursor-pointer btn-learn c-green-border c-green fs18">
                                Learn more
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
