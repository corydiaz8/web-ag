import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_optimize.css';
import brain from'../../../assets/images/brain1.svg';
class Optimize extends Component {

    render() {
        return (
            <div className="optimize-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className=" text-center mx-auto">
                                <h2 className="optimize-section__title font-medium fs50 c-white">
                                    Powerful insights. Smarter decisions.
                                </h2>
                                <p className="max-w800 mx-auto optimize-section__txt fs20 c-white roboto-font">Optimize your book and improve your
                                    sales efficiency with smart insights powered by advanced analytics.</p>
                                <Link id='btnDemoAnMain' to='requestdemo'className="btn btn__demo fs18 bgc-white c-green roboto-font">
                                    Request a demo
                                </Link>
                                <img src={brain} alt="brain" className="optimize-section__img"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default Optimize;
