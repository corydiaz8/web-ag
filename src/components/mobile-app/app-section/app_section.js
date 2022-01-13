import React, {Component} from 'react';

import './_app_section.css';
import arrow_dropdown_circle from '../../../assets/images/arrow-dropdown-circle.svg';
// import include_mobile from'../../../assets/images/include-mobile.png';
// import include_desktop from'../../../assets/images/include-desktop-old.png';


import mobile_1 from '../../../assets/images/1.insurance-wallet.png';
import mobile_2 from '../../../assets/images/2.policy-docs.png';
import mobile_3 from '../../../assets/images/3.quote-requests.png';
import mobile_4 from '../../../assets/images/4.referral-program.png';
import mobile_5 from '../../../assets/images/5.agency-contact.png';

import desktop_1 from '../../../assets/images/6.customer-insights.png';
import desktop_2 from '../../../assets/images/7.iInvitation-sequences.png';
import desktop_3 from '../../../assets/images/8.quote-notifications.png';
import desktop_4 from '../../../assets/images/9.cross-selling-opportunities.png';
import desktop_5 from '../../../assets/images/10.automated-sync.png';

class App_section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collaps_1: [[true, mobile_1], [false, mobile_2], [false, mobile_3], [false, mobile_4], [false, mobile_5]],
            collaps_2: [[true, desktop_1], [false, desktop_2], [false, desktop_3], [false, desktop_4], [false, desktop_5]],
            active_mobile: mobile_1,
            active_desktop: desktop_1,
        }
    }
    change_class = (arr_name, key) => {
        let image = '';
        let image_key = arr_name === 'collaps_1' ? 'active_mobile' : 'active_desktop';
        let names_arr = this.state;
        for (let i = 0; i < names_arr[arr_name].length; i++) {
            if (i === key) {
                names_arr[arr_name][i][0] = true;
                image = names_arr[arr_name][i][1];
            } else {
                names_arr[arr_name][i][0] = false;
            }
        }
        this.setState({[arr_name]: names_arr[arr_name], [image_key]: image})
        // console.log(this.state[arr_name])
    };



    render() {
        return (
            <section className="app-section">
                <div className="container-fluid big-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="app-section__title fs50 font-medium c-green">
                                What’s included
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="include__box">
                                <h2 className="include__box-title fs38 font-light c-green font-medium">A mobile app for
                                    your
                                    policyholders:</h2>
                                <div id="accordion" className="accordion-card">
                                    <div className={"card" + (this.state.collaps_1[0][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingInsurance">
                                            <button className="btn btn-link accordion-card__title text-decoration-none"
                                                    data-toggle="collapse" data-target="#collapseInsurance"
                                                    aria-expanded="true"
                                                    aria-controls="collapseInsurance"
                                                    onClick={() => this.change_class('collaps_1', 0)}>
                                                Insurance Wallet <img src={arrow_dropdown_circle} alt="arrow"
                                                                      className="arrow"/>
                                            </button>
                                        </div>

                                        <div id="collapseInsurance" className="collapse show"
                                             aria-labelledby="headingInsurance"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Manage all policies in one place (even those outside your agency).
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_1[1][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingPolicy">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapsePolicy"
                                                aria-expanded="false"
                                                aria-controls="collapsePolicy"
                                                onClick={() => this.change_class('collaps_1', 1)}>
                                                Policy docs <img src={arrow_dropdown_circle} alt="arrow"
                                                                 className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapsePolicy" className="collapse" aria-labelledby="headingPolicy"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Access ID cards and important documents, always up to date.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_1[2][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingQuote">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseQuote"
                                                aria-expanded="false"
                                                aria-controls="collapseQuote"
                                                onClick={() => this.change_class('collaps_1', 2)}>
                                                Quotes <img src={arrow_dropdown_circle} alt="arrow"
                                                            className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseQuote" className="collapse" aria-labelledby="headingQuote"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Request quotes anytime, anywhere.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_1[3][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingReferral">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseReferral"
                                                aria-expanded="false"
                                                aria-controls="collapseReferral"
                                                onClick={() => this.change_class('collaps_1', 3)}>
                                                Referral program <img src={arrow_dropdown_circle} alt="arrow"
                                                                      className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseReferral" className="collapse"
                                             aria-labelledby="headingReferral"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Easily refer friends and family.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_1[4][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingAgency">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseAgency"
                                                aria-expanded="false"
                                                aria-controls="collapseAgency"
                                                onClick={() => this.change_class('collaps_1', 4)}>
                                                Agency contact <img src={arrow_dropdown_circle} alt="arrow"
                                                                    className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseAgency" className="collapse" aria-labelledby="headingAgency"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Contact your agent in one tap.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-3 offset-lg-1 col-lg-5">
                            <div className="include__box text-lg-left text-center dn_mobile">
                                <img src={this.state.active_mobile} alt="phone"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5  col-lg-5 offset-xl-1 order-lg-1">
                            <div className="include__box">
                                <h2 className="include__box-title fs38 font-light c-green font-medium">An agent portal
                                    for you:</h2>
                                <div id="accordion-agent" className="accordion-card">
                                    <div className={"card" + (this.state.collaps_2[0][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingCustomer">
                                            <button className="btn btn-link accordion-card__title text-decoration-none"
                                                    data-toggle="collapse" data-target="#collapseCustomer"
                                                    aria-expanded="true"
                                                    aria-controls="collapseCustomer"
                                                    onClick={() => this.change_class('collaps_2', 0)}>
                                                Sales pipeline <img src={arrow_dropdown_circle}
                                                                    alt="arrow"
                                                                    className="arrow"/>
                                            </button>
                                        </div>

                                        <div id="collapseCustomer" className="collapse show"
                                             aria-labelledby="headingCustomer"
                                             data-parent="#accordion-agent">
                                            <div className="card-body">
                                                Manage your sales funnel and communications from new to closed
                                                opportunities.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_2[3][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingInvitation">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseInvitation"
                                                aria-expanded="false" aria-controls="collapseInvitation"
                                                onClick={() => this.change_class('collaps_2', 3)}>
                                                Client insights <img src={arrow_dropdown_circle}
                                                                     alt="arrow"
                                                                     className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseInvitation" className="collapse"
                                             aria-labelledby="headingInvitation"
                                             data-parent="#accordion-agent">
                                            <div className="card-body">
                                                View all policyholders’ data, including opportunities created from the
                                                app.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_2[4][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingQuoteNot">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseQuoteNot"
                                                aria-expanded="false"
                                                aria-controls="collapseQuoteNot"
                                                onClick={() => this.change_class('collaps_2', 4)}>
                                                Technology sync <img src={arrow_dropdown_circle}
                                                                     alt="arrow"
                                                                     className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseQuoteNot" className="collapse"
                                             aria-labelledby="headingQuoteNot"
                                             data-parent="#accordion-agent">
                                            <div className="card-body">
                                                Connect your technology to automatically maintain client and policy data
                                                up-to-date.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_2[1][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingCross">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseCross"
                                                aria-expanded="false"
                                                aria-controls="collapseCross"
                                                onClick={() => this.change_class('collaps_2', 1)}>
                                                Automated invitations <img src={arrow_dropdown_circle}
                                                                           alt="arrow" className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseCross" className="collapse" aria-labelledby="headingCross"
                                             data-parent="#accordion-agent">
                                            <div className="card-body">
                                                Invite clients and prospects to download the app automatically.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"card" + (this.state.collaps_2[2][0] ? ' card-bgcGreen' : '')}>
                                        <div className="card-header" id="headingAutomated">
                                            <button
                                                className="btn btn-link accordion-card__title collapsed text-decoration-none"
                                                data-toggle="collapse" data-target="#collapseAutomated"
                                                aria-expanded="false" aria-controls="collapseAutomated"
                                                onClick={() => this.change_class('collaps_2', 2)}>
                                                Quote requests <img src={arrow_dropdown_circle} alt="arrow"
                                                                    className="arrow"/>
                                            </button>
                                        </div>
                                        <div id="collapseAutomated" className="collapse"
                                             aria-labelledby="headingAutomated"
                                             data-parent="#accordion-agent">
                                            <div className="card-body">
                                                Receive and respond to quotes easily.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-0">
                            <div className="include__box text-lg-left text-center dn_mobile">
                                <img src={this.state.active_desktop} alt="desktop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default App_section;
