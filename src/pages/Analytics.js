import React, { Component } from 'react';
import Header from './../components/common/header/header';
import Footer from './../components/common/footer/footer';
import Optimize from './../components/analytics/optimize-section/optimize';
import Drive from './../components/analytics/drive-section/drive';
import Inc_section from './../components/analytics/include-section/inc_section';
import Feature from './../components/analytics/feature-section/feature';
import Agency from './../components/analytics/agency-section/agency';


import Connected from './../components/main-page/connected-section/connected';
import SignupModal from "../components/common/signup-modal/SignupModal";
import Meta from "../components/common/meta/Meta";
let lastScrollY = 0;
let LazyLineStart = true;
export default class Analytics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header_fx:false,
            animatable:[],
            message_element: [],
            header_class: '',
            demo_button: []
        };
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

        let anim_start = 2588;
        if(lastScrollY > anim_start && LazyLineStart){
            LazyLineStart = false;
            // let myAnimation = new LazyLinePainter(this.state.message_element[0], { strokeWidth : 2 ,speedMultiplier:3,"strokeColor":"#ffffff",'strokeCap': null, }).paint();
        }
    };

    render() {
        return (
            <div>
                <Meta title={"Agentero: Data and Analytics for Independent Insurance Agents"}/>
                <div className={'header-bg analytics_page '+this.state.header_class}>
                    <Header />
                    <Optimize/>
                </div>
                <main>
                    <Drive/>
                    <Inc_section/>
                    <Feature/>
                    <Agency message_element={this.state.message_element} />
                    <Connected/>
                </main>
                <Footer/>
                <SignupModal/>
            </div>
        );
    }
}
