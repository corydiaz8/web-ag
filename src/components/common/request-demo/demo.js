import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './_demo.css';
import logo_mini from '../../../assets/images/logo-mini.svg';

class Demo extends Component {

    render() {
        var className = '';
        return (
            <div className="modal fade" id="demoModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Link to='/'>
                                <img src={logo_mini} alt="agentero" className="modal-header__logo" />
                            </Link>

                            <h5 className="modal-title c-gray fs28 font-light">Agentero helps you grow your insurance
                                agency.</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="#" className="new-form-demo">
                                <p className="error-message fs16 c-white"><span className="font-bold">Email:</span> Must
                                    be a valid email:
                                    example@company.com </p>
                                <div className="form-group">
                                    <input type="text" className="form-control fs16 c-gray" placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control fs16 c-gray" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control fs16 c-gray" placeholder="Phone number"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control fs16 c-gray" placeholder="Agency name"/>
                                </div>

                                <div className="form-group">
                                    <div className="dropup">
                                        <button type="button" className="dropup-btn dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            <span className="info db fs11 c-gray">Which Agency Management System are you using?</span>
                                            <span className="fs16 c-gray">Select</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <p className="fs14 c-gray dropup-txt">Select</p>
                                            <p className="fs14 c-gray dropup-txt">Ezlynx</p>
                                            <p className="fs14 c-gray dropup-txt">AMS 360</p>
                                            <p className="fs14 c-gray dropup-txt">QQ Catalyst</p>
                                            <p className="fs14 c-gray dropup-txt">Applied</p>
                                            <p className="fs14 c-gray dropup-txt">Hawksoft</p>
                                            <p className="fs14 c-gray dropup-txt">Agency Matrix</p>
                                            <p className="fs14 c-gray dropup-txt">Other</p>
                                            <p className="fs14 c-gray dropup-txt">Not using any AMS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn__demo w-100 fs16 bgc-green c-white">Request
                                        a demo
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default Demo;