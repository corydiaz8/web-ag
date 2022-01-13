import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_digital.css';
import digital_img from'../../../assets/images/digital-img.svg';

class Digital extends Component {

    render() {
        return (
            <section className="digital-section">
                <div className="container-fluid big-container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <h2 className="digital-section__title fs50 c-white">Ready to go digital?</h2>
                            <Link id="btnDemoMobBottom" to='requestdemo' className="btn btn__demo fs18 c-green bgc-white roboto-font mb-3" >Request a demo</Link>
                            <ul className="digital__list">
                                <li>Free trial</li>
                                <li>Easy onboarding</li>
                                <li>Grow your agency</li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <img src={digital_img} alt="digital"/>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
};

export default Digital;