import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './_SignupModal.css';
import icon_facebook from'../../../assets/images/icon-facebook.svg';
import icon_twitter from'../../../assets/images/icon-twitter.svg';
import icon_linkedin from'../../../assets/images/icon-linkedin.svg';

class SignupModal extends Component {

    render() {
        return (
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title c-green fs30 font-bold">Welcome!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="subtitle fs20 font-bold c-darkBlue">
                                <p>You'll find:</p>
                                <p>-Tailored content and best practices</p>
                                <p>-New and exciting features</p>
                            </div>
                            <div className="follow-box fs15 font-bold c-darkBlue">
                                <p>Follow us on to stay connected</p>
                                <ul className="follow-list">
                                    <li className="follow-list__item">
                                        <a href="https://www.facebook.com/agenteroInc"
                                           rel="nofollow" title="Facebook" target="_blank"
                                           className="follow-list__link text-decoration-none">
                                            <img src={icon_facebook} alt="facebook" title="facebook"
                                                 className="follow-list__icon"/>
                                        </a>
                                    </li>
                                    <li className="follow-list__item"><a href="https://twitter.com/Agentero1"
                                                                         title="twitter" rel="nofollow" target="_blank"
                                                                         className="follow-list__link text-decoration-none">
                                        <img src={icon_twitter} alt="twitter" title="twitter"
                                             className="follow-list__icon"/>
                                    </a>
                                    </li>
                                    <li className="follow-list__item">
                                        <a href="https://www.linkedin.com/company/agentero"
                                           title="LinkedIn" rel="nofollow" target="_blank"
                                           className="follow-list__link text-decoration-none">
                                            <img src={icon_linkedin} alt="linkedin" title="linkedin"
                                                 className="follow-list__icon"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-ok bgc-darkBlue c-white font-medium fs15"
                                    data-dismiss="modal">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SignupModal;