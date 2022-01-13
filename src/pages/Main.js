import React, { Component } from 'react';
import Header from './../components/common/header/header';
import Footer from './../components/common/footer/footer';
import Grow from './../components/main-page/grow-section/grow';
import Service from './../components/main-page/service-section/service';
import Quote from './../components/main-page/quote-section/quote';
import Connected from './../components/main-page/connected-section/connected';
import SignupModal from '../components/common/signup-modal/SignupModal';
import Meta from '../components/common/meta/Meta';

let lastScrollY = 0;
let LazyLineStart = true;
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_fx: false,
      animatable: [],
      demo_button: [],
      header_class: '',
      message_element: []
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

    if (lastScrollY > 350) {
      this.setState({ header_class: 'fixed-header' });
    } else {
      if (this.state.header_class === 'fixed-header') {
        this.setState({ header_class: 'fixed-header is-up-scroll' });
      }
      if (this.state.header_class === 'fixed-header is-up-scroll') {
        var _this = this;
        _this.setState({ header_class: '' });
        // setTimeout(function() {
        //   _this.setState({ header_class: '' });
        // }, 400);
      }
    }

    let anim_start = 970;
    if (lastScrollY > anim_start && LazyLineStart) {
      LazyLineStart = false;
      // let myAnimation = new LazyLinePainter(this.state.message_element[0], { strokeWidth : 3 ,speedMultiplier:3,"strokeColor":"#37BB91",'strokeCap': null, }).paint();
    }
  };

  render() {
    return (
      <div>
        <Meta
          title={
            'Agentero: Sales and Service Platform for Independent Insurance Agents'
          }
        />
        <div className={'header-bg ' + this.state.header_class}>
          <Header />
          <Grow demo_button={this.state.demo_button} />
        </div>
        <main>
          <Service animatable={this.state.animatable} />
          <Quote message_element={this.state.message_element} />
          <Connected />
        </main>
        <Footer />
        <SignupModal />
      </div>
    );
  }
}
