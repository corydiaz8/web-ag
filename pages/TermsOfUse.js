import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from './../components/common/header/header';
import Footer from './../components/common/footer/footer';
import Fluid from './../components/terms/container-fluid/fluid';
import Terms from './../components/terms/terms-section/terms';

let lastScrollY = 0;
export default class TermsOfUse extends Component {



    constructor(props) {
        super(props);
        this.state = {
            header_fx:false,
            header_class: '',
        };
        // console.log(innerHeight());
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        lastScrollY = window.scrollY;

        if(lastScrollY >  350 ){
            this.setState({ header_class: 'fixed-header' });
        }else {
            if(this.state.header_class === 'fixed-header'){
                this.setState({ header_class: 'fixed-header is-up-scroll' });
            }
            if(this.state.header_class === 'fixed-header is-up-scroll'){
                var _this = this;
                setTimeout(function () {
                    _this.setState({ header_class: '' });
                },400)
            }
        }
    };

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers."/>
                    <meta property="og:url" content="https://www.agentero.com/agents" />
                    <meta property="og:description" content="Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers." />
                </Helmet>
                <div className={'header-bg '+this.state.header_class}>
                    <Header />
                    <Fluid/>
                </div>
                <main>
                    <Terms/>
                </main>
                <Footer/>
            </div>
        );
    }
}
