import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import $ from 'jquery';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import MobileApp from './pages/MobileApp';
import Analytics from './pages/Analytics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Pricing from './pages/Pricing';
import RequestDemo from './pages/RequestDemo';
import Error404 from './pages/Error404';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_fx: false,
      animatable: [],
      demo_button: [],
      header_class: '',
      message_element: [],
      lastScrollY: 0,
      LazyLineStart: true
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
    this.setState({
      lastScrollY: window.scrollY
    });
    if (this.state.lastScrollY > 350) {
      this.setState({ header_class: 'fixed-header' });
    } else {
      if (this.state.header_class === 'fixed-header') {
        this.setState({ header_class: 'fixed-header is-up-scroll' });
      }
      if (this.state.header_class === 'fixed-header is-up-scroll') {
        var _this = this;
        setTimeout(function() {
          _this.setState({ header_class: '' });
        }, 400);
      }
    }

    let anim_start = 970;
    if (this.state.lastScrollY > anim_start && this.state.LazyLineStart) {
      this.setState({
        LazyLineStart: false
      });
    }
  };

  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Route exact path='/' render={props => <Main {...props} />} />
          <Route
            exact
            path='/mobile-app'
            render={props => <MobileApp {...props} />}
          />
          <Route path='/analytics' render={props => <Analytics {...props} />} />
          <Route
            exact
            path='/privacy-policy'
            render={props => <PrivacyPolicy {...props} />}
          />
          <Route
            exact
            path='/terms-of-use'
            render={props => <TermsOfUse {...props} />}
          />
          <Route path='/pricing' render={props => <Pricing {...props} />} />
          <Route
            exact
            path='/requestdemo'
            render={props => <RequestDemo {...props} />}
          />
          <Route path='/:url' render={props => <Error404 {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
