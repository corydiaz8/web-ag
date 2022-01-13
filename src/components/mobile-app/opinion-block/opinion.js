import React, { Component } from 'react';

import './_opinion.css';
import user_img1 from'../../../assets/images/user-img1.png';
import user_img3 from'../../../assets/images/user-img3.png';
import {isAndroid, isIOS, isMobile} from "react-device-detect";
class Opinion extends Component {

    messageAnimation =(el) =>{
        this.props.message_element.push(el);

    };
    render() {

        const starts = [];

        for (let i=0;i<5;i++) {
            starts.push(<svg  key={i} className="star-svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22.83">
                <path className="cls-1"
                      d="M12,0l3.67,7.57L24,8.72l-6.06,5.83,1.48,8.28-7.42-4-7.42,4,1.48-8.28L0,8.72,8.33,7.57Z"/>
            </svg>)
        }

        const MobileContent = [];

        if(isMobile){
            if(isIOS){
                MobileContent.push(<div key='IOS' className="d-lg-inline-block text-center">
                    <a href="https://agentero.app.link/5dzyf7wakH" className="btn btn__app" id="btnAppStore">
                        <svg className="svg-app" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 376.4 447.92">
                            <path className="cls-1"
                                  d="M314.7,236.7c-.2-36.7,16.4-64.4,50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3,20.7-88.5,20.7-15,0-49.4-19.7-76.4-19.7C59.3,109.2,0,152.8,0,241.5q0,39.3,14.4,81.2c12.8,36.7,59,126.7,107.2,125.2,25.2-.6,43-17.9,75.8-17.9,31.8,0,48.3,17.9,76.4,17.9,48.6-.7,90.4-82.5,102.6-119.3-65.2-30.7-61.7-90-61.7-91.9ZM258.1,72.5c27.3-32.4,24.8-61.9,24-72.5-24.1,1.4-52,16.4-67.9,34.9-17.5,19.8-27.8,44.3-25.6,71.9C214.7,108.8,238.5,95.4,258.1,72.5Z"/>
                        </svg>
                        Available on the App Store
                    </a>

                    <div className="text-center">
                        {starts}
                    </div>
                </div>)
            }
            if(isAndroid){
                MobileContent.push(<div key='Android' className="d-lg-inline-block text-center">
                    <a href="https://agentero.app.link/QhtX96PbkH" className="btn btn__app" id="btnGooglePlay">
                        <svg className="svg-app" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 461.45 511.9">

                            <path className="cls-1"
                                  d="M300,234.3,79.3,13,360.1,174.2,300,234.3ZM21.7,0C8.7,6.8,0,19.2,0,35.3V476.6c0,16.1,8.7,28.5,21.7,35.3l256.6-256ZM446.9,225.6,388,191.5,322.3,256,388,320.5l60.1-34.1c18-14.3,18-46.5-1.2-60.8ZM79.3,499,360.1,337.8,300,277.7Z"/>
                        </svg>
                        Available on Google Play
                    </a>

                    <div className="text-center">
                        {starts}
                    </div>
                </div>);
            }
        }else{
            MobileContent.push(<div key='AppStore' className="d-lg-inline-block text-center">
                <a id="btnAppStore" href="https://agentero.app.link/5dzyf7wakH" className="btn btn__app">
                    <svg className="svg-app" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 376.4 447.92">
                        <path className="cls-1"
                              d="M314.7,236.7c-.2-36.7,16.4-64.4,50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3,20.7-88.5,20.7-15,0-49.4-19.7-76.4-19.7C59.3,109.2,0,152.8,0,241.5q0,39.3,14.4,81.2c12.8,36.7,59,126.7,107.2,125.2,25.2-.6,43-17.9,75.8-17.9,31.8,0,48.3,17.9,76.4,17.9,48.6-.7,90.4-82.5,102.6-119.3-65.2-30.7-61.7-90-61.7-91.9ZM258.1,72.5c27.3-32.4,24.8-61.9,24-72.5-24.1,1.4-52,16.4-67.9,34.9-17.5,19.8-27.8,44.3-25.6,71.9C214.7,108.8,238.5,95.4,258.1,72.5Z"/>
                    </svg>
                    Available on the App Store
                </a>

                <div className="text-center">
                    {starts}
                </div>
            </div>);
            MobileContent.push(<div key='GooglePlay' className="d-lg-inline-block text-center">
                <a id='btnGooglePlay' href="https://agentero.app.link/QhtX96PbkH" className="btn btn__app">
                    <svg className="svg-app" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 461.45 511.9">

                        <path className="cls-1"
                              d="M300,234.3,79.3,13,360.1,174.2,300,234.3ZM21.7,0C8.7,6.8,0,19.2,0,35.3V476.6c0,16.1,8.7,28.5,21.7,35.3l256.6-256ZM446.9,225.6,388,191.5,322.3,256,388,320.5l60.1-34.1c18-14.3,18-46.5-1.2-60.8ZM79.3,499,360.1,337.8,300,277.7Z"/>
                    </svg>
                    Available on Google Play
                </a>

                <div className="text-center">
                    {starts}
                </div>
            </div>);
        }

        // const iosContent = isIOS? :'';
        // const androidContent = isAndroid? :'';
        return (
            <section className="opinion-block">
                <div className="container-fluid big-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="opinion-inner pr dib clearfix">
                                <svg width="962px" ref={this.messageAnimation} className="quotes-svg" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 962.8 514.8">
                                    <polyline className="cls-1" style={{fill:'none',stroke:'#37bb91','strokeMiterlimit':10,'strokeWidth':'3px'}}
                                              points="466.74 161 466.74 12.82 20.34 12.82 20.34 244.81 95.46 244.81 95.46 278.82 137 243.5 402.5 243.5"/>
                                    <polygon className="cls-1" style={{fill:'none',stroke:'#37bb91','strokeMiterlimit':10,'strokeWidth':'3px'}}
                                             points="745.23 411 789.23 445 789.23 411 864.23 411 864.23 179 418.23 179 418.23 411 745.23 411"/>
                                </svg>

                                <p className="message-txt left c-darkBlue fs18 font-medium text-center">“My family has
                                    so many
                                    insurance logins - auto (x2), renters, life (x3), etc. Amazing to finally find a
                                    product
                                    that allows me to see them all in one place”</p>

                                <div className="opinion-user left d-flex align-items-center">
                                    <div className="d-flex_item">
                                        <div className="opinion-user__img"
                                             style={{"backgroundImage": `url(${user_img1})`}}></div>
                                    </div>
                                    <div className="d-flex_item text-left">
                                        <h3 className="opinion-user__name fs30 c-darkBlue">Samuel M.</h3>
                                        <p className="opinion-user__role fs20 c-darkBlue">Policyholder</p>
                                    </div>

                                </div>

                                <p className="message-txt right c-darkBlue fs18 font-medium text-center">“Agentero
                                    empowers us to
                                    increase customer retention by providing easy access to our agency and allowing
                                    clients to
                                    manage their policies through the mobile app”</p>

                                <div className="opinion-user right d-flex align-items-center">
                                    <div className="d-flex_item text-right">
                                        <h3 className="opinion-user__name fs30 c-darkBlue">Peggy M.</h3>
                                        <p className="opinion-user__role fs20 c-darkBlue">Agency Owner</p>
                                    </div>
                                    <div className="d-flex_item">
                                        <div className="opinion-user__img"
                                             style={{"backgroundImage": `url(${user_img3})`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">{MobileContent}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Opinion;