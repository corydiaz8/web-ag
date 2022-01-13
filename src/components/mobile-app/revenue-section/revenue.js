import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './_revenue.css';
import face1 from '../../../assets/images/face1.svg';
import face2 from '../../../assets/images/face2.svg';
import face3 from '../../../assets/images/face3.svg';
import face4 from '../../../assets/images/face4.svg';
import face5 from '../../../assets/images/face5.svg';
import magnet from '../../../assets/images/magnet.svg';

class Revenue extends Component {

    render() {
        return (
            <div className="revenue-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="max-w800 text-center mx-auto">
                                <h2 className="revenue-section__title font-medium fs50 c-white d-flex flex-wrap justify-content-center">
                                    <span>More sales.</span>
                                    <span className='pl-1'> Better service.</span>
                                </h2>
                                <p className="revenue-section__txt fs20 c-white roboto-font">A branded mobile app for
                                    your
                                    policyholders to manage all their insurance, with your agency at the center.</p>

                                <Link id='btnDemoMobMain' to="requestdemo" className="btn btn__demo fs18 bgc-white c-green roboto-font">
                                    Request a demo
                                </Link>
                                <div className="magnet-box pr text-left mx-auto">
                                    <img src={magnet} alt="magnet" className="magnet"/>
                                    <img src={face1} alt="face" className="face face-1"/>
                                    <img src={face2} alt="face" className="face face-2"/>
                                    <img src={face3} alt="face" className="face face-3"/>
                                    <img src={face4} alt="face" className="face face-4"/>
                                    <img src={face5} alt="face" className="face face-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Revenue;