import React, { Component } from 'react';
import Header from './../components/common/header/header';
import Footer from './../components/common/footer/footer';
import Revenue from './../components/mobile-app/revenue-section/revenue';
import Solution from './../components/mobile-app/solution-section/solution';
import App_section from './../components/mobile-app/app-section/app_section';
import Feature from './../components/mobile-app/feature-section/feature';
import Opinion from './../components/mobile-app/opinion-block/opinion';
import Digital from './../components/mobile-app/digital-section/digital';

import Connected from './../components/main-page/connected-section/connected';
import SignupModal from "../components/common/signup-modal/SignupModal";
import Meta from "../components/common/meta/Meta";
let lastScrollY = 0;
let LazyLineStart = true;
export default class MobileApp extends Component {

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

        let anim_start = 2735;
        if(lastScrollY > anim_start && LazyLineStart){
            LazyLineStart = false;
            // let myAnimation = new LazyLinePainter(this.state.message_element[0], { strokeWidth : 2 ,speedMultiplier:3,"strokeColor":"#37BB91",'strokeCap': null, }).paint();
        }
    };

    render() {
        return (
            <div>
                <Meta title={"Agentero: Mobile App for Independent Insurance Agents"}/>
                <div className={'header-bg '+this.state.header_class}>
                    <Header />
                    <Revenue/>
                </div>
                <main>
                    <Solution/>
                    <App_section/>
                    <Feature/>
                    <Opinion message_element={this.state.message_element} />
                    <Digital/>
                    <Connected/>
                </main>
                <Footer/>
                <SignupModal/>
            </div>
        );
    }
}
