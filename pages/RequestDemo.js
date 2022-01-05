import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Demo from "../components/common/request-demo-page/demo";

let lastScrollY = 0;

export default class RequestDemo extends Component {


    render() {
        return (
            <div >
                <Helmet>
                    <meta name="description" content="Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers."/>
                    <meta property="og:url" content="https://www.agentero.com/agents" />
                    <meta property="og:description" content="Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers." />
                </Helmet>
                <main>
                    <Demo/>
                </main>
            </div>
        );
    }
}
