import React, {Component} from 'react';

import './_inc_section.css';
import include_desktop_1 from '../../../assets/images/include-desktop-1.png';
import include_desktop_2 from '../../../assets/images/include-desktop-2.png';

class Inc_section extends Component {


    render() {
        return (
            <section className="include-section">
                <div className="container-fluid big-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="include-section__title fs50 font-medium c-green">
                                What’s included
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="include__box padRight">
                                <h2 className="include__box-title fs38 c-green font-medium">Identify new opportunities
                                    at the right time.</h2>
                                <p className="include__box-txt fs18 c-gray">Analytics utilizes algorithms and third
                                    party data to scan your clients’ profiles, surface policy recommendations and
                                    prioritize your renewals.</p>
                                <p className="include__box-txt fs18 c-gray">Opportunities are automatically displayed 60
                                    days prior to the renewal date, making your renewal process more efficient.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="include__box padLeft text-lg-left text-center">
                                <img src={include_desktop_1} alt="desktop"/>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1">
                            <div className="include__box padLeft">
                                <h2 className="include__box-title fs38 c-green font-medium">Sell more policies with less
                                    effort.</h2>
                                <p className="include__box-txt fs18 c-gray">Analytics automatically syncs with your data
                                    and fills your pipeline with opportunities, maximizing the value of your book and
                                    saving you time and effort.</p>
                                <p className="include__box-txt fs18 c-gray">You’ll instantly identify policies and
                                    coverage recommendations for each of your clients to uncover valuable cross-selling
                                    opportunities and increase revenue per client.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-0">
                            <div className="include__box padRight text-lg-left text-center">
                                <img src={include_desktop_2} alt="desktop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Inc_section;
