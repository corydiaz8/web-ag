import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './_agency.css';
import user_img4 from '../../../assets/images/user-img4.png';

class Agency extends Component {
    messageAnimation = (el) => {
        this.props.message_element.push(el);

    };



    render() {
        return (
            <section className="agency-section">
                <div className="container-fluid big-container">
                    <div className="row flex-lg-row flex-column">
                        <div className="col-lg-6 col-xl-5">
                            <div className="agency-box">
                                <div className="agency-user">
                                    <div className="d-flex_item text-right">
                                        <h3 className="agency-user__name fs30 c-darkBlue font-bold"> Matthew Sutika</h3>
                                        <p className="agency-user__role fs20 c-darkBlue">Skylight Insurance</p>
                                    </div>
                                    <div className="d-flex_item">
                                        <div className="agency-box__circle"
                                             style={{backgroundImage: 'url(' + user_img4 + ')'}}></div>
                                    </div>
                                </div>

                                <div className="agency-message">
                                    <p className="agency-message__txt fs18 font-medium c-darkBlue text-center bgc-white roboto-font">“Agentero
                                        provides us with great insights to focus our efforts on valuable opportunities.
                                        Our renewal process is now much more efficient, and it has been a key growth
                                        lever.” </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-xl-1 col-xl-6">
                            <h2 className="fs50 c-white agency-section__title ">Start growing your agency today</h2>
                            <div className="agency-section__digital">
                                <Link id="btnDemoAnBottom" to='requestdemo' className="btn btn__demo fs18 bgc-white c-green font-medium roboto-font">
                                    Request a demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
};

export default Agency;