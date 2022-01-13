import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './_header.css';
import $ from 'jquery';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            rightMenu: false,
        };
    }

    toggleClass = (e) => {
        this.setState({rightMenu: !this.state.rightMenu})
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        })
        if (this.state.active) {
            $('.navbar-toggler').removeClass('collapsed')
            document.body.classList.add('show-right-menu');

        } else {
            $('.navbar-toggler').addClass('collapsed')
            document.body.classList.remove('show-right-menu');
        }
    };

    HistoryPush = (field) => {
        this.toggleClass()
        this.props.history.push(field)
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid">
                        <nav
                            className="navbar navbar-expand-lg navbar-light align-items-lg-start justify-content-between">
                            <h1 className="navbar-brand">
                                <Link className="db" to="/" title="Agentero">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 67">
                                        <title>Agentero</title>
                                        <path id="Fill_1" data-name="Fill 1" className="cls-1"
                                              d="M60.15,67a31.42,31.42,0,0,1-10.36-1.56A21.81,21.81,0,0,1,42.23,61c-3.84-3.42-6.78-8.3-9.56-15.82L27.85,31.67l-8.46-24-.91-2.57-.9,2.57L9.82,29.59,27.7,34l.28.6H0L11.73,4.06A6.35,6.35,0,0,1,17.64,0h1.77a6.66,6.66,0,0,1,6.24,4.34L40.47,44C46,56.81,52.15,59.61,60.29,60H61c6.11,0,9.94-3.74,10.12-7.36a5.08,5.08,0,0,0-1.72-4.09,10.25,10.25,0,0,0-6-2.28c-3.67-.36-8.24-.81-11.59-2C48.11,43,46.33,41,46.33,38.14a5,5,0,0,1,1.3-3.62,8.14,8.14,0,0,1,4-2,9.29,9.29,0,0,1-4.17-4,10.66,10.66,0,0,1-1.16-4.95c0-4.18,1.06-7.1,3.34-9.17,2.77-2.52,7.37-3.75,14-3.75H79.23v5.18l-5-.18A6.56,6.56,0,0,1,77,18.52a11,11,0,0,1,1.15,5.11c0,4.18-1,7-3.1,9-2.52,2.35-6.76,3.49-13,3.49-2.32,0-5.56-.14-5.59-.14-2.94.37-3.54.91-3.54,1.6,0,1.57,2.56,1.91,9.39,2.81h0l1.3.17c7.25.94,14.82,2.86,16,10.07a9.55,9.55,0,0,1-.5,4.59,15.3,15.3,0,0,1-2.82,4.86A18.93,18.93,0,0,1,69.91,65,23.2,23.2,0,0,1,60.15,67Zm2-50.24c-7.32,0-8.3,3.33-8.3,6.6,0,2.39.51,4,1.59,5.17,1.32,1.38,3.54,2,6.78,2s5.36-.65,6.67-2c1.11-1.14,1.64-2.8,1.64-5.23C70.51,19.93,69.49,16.76,62.14,16.76Z"/>
                                        <path id="Fill_3" data-name="Fill 3" className="cls-1"
                                              d="M139.48,10.48c-7.71,0-11.3,3.22-12.43,5.79L127,11h-5.39V48.48h7.11V27.61c0-6.74,1.53-10.62,8.77-10.62s8.31,4,8.31,10.62V48.48h7.05V28.28c0-10.62-2.2-17.8-13.37-17.8"/>
                                        <path id="Fill_5" data-name="Fill 5" className="cls-1"
                                              d="M165.41,3.41H158v8.94h-5.13v6H158V37.84c0,8.45,5,11.24,16.85,10.54v-6c-7.79.35-9.2-1.19-9.2-4.54V18.35h9.2v-6h-9.41Z"/>
                                        <path id="Fill_7" data-name="Fill 7" className="cls-1"
                                              d="M222.93,16.19V11h-5.37V48.48h7V27.68c0-6.08,1.38-10.4,8.4-10.4.59,0,1.25.15,1.91.15v-7h-1.11c-6.57,0-9.78,3.22-10.83,5.71"/>
                                        <path id="Fill_9" data-name="Fill 9" className="cls-1"
                                              d="M253,48.48a19,19,0,1,1,13.48-5.57A19,19,0,0,1,253,48.48Zm0-31a12,12,0,1,0,12,12,12,12,0,0,0-12-12Z"/>
                                        <path id="Fill_11" data-name="Fill 11" className="cls-1"
                                              d="M100.65,48.48A26.51,26.51,0,0,1,91,46.89a14.65,14.65,0,0,1-6-4.24,16,16,0,0,1-3-6.09,27.58,27.58,0,0,1-.85-7.16,27.12,27.12,0,0,1,.86-7.13,15.8,15.8,0,0,1,3.06-6A14.63,14.63,0,0,1,91,12a26.48,26.48,0,0,1,9.61-1.57c5.73,0,10.14,1.65,13.13,4.9,3.46,3.77,5,9.7,4.32,17.14H89.52c.48,6.67,4.12,10,10.82,10,5.23,0,8.27-1.94,9.3-5.93h8.53a11.74,11.74,0,0,1-4.42,8.28C110.75,47.28,106.34,48.48,100.65,48.48Zm-.84-32c-6.49,0-9.74,3.14-10.21,9.9h20s0,0,0,0,0,0,0-.06,0,0,0-.06,0,0,0,0a9.9,9.9,0,0,0-2.48-7.17C105.47,17.34,103,16.48,99.81,16.48Z"/>
                                        <path id="Fill_13" data-name="Fill 13" className="cls-1"
                                              d="M195.38,48.48a26.51,26.51,0,0,1-9.68-1.59,14.65,14.65,0,0,1-6-4.24,16,16,0,0,1-3-6.09,27.58,27.58,0,0,1-.85-7.16,27.13,27.13,0,0,1,.86-7.13,15.8,15.8,0,0,1,3.06-6,14.63,14.63,0,0,1,6-4.19,26.49,26.49,0,0,1,9.61-1.57c5.73,0,10.14,1.65,13.13,4.9,3.46,3.77,5,9.7,4.32,17.14h-28.5c.48,6.67,4.12,10,10.82,10,5.23,0,8.27-1.94,9.3-5.93h8.54a11.74,11.74,0,0,1-4.42,8.28C205.49,47.28,201.08,48.48,195.38,48.48Zm-.84-32c-6.49,0-9.74,3.14-10.21,9.9h20s0,0,0,0,0,0,0-.06,0,0,0-.06,0,0,0,0a9.89,9.89,0,0,0-2.48-7.17C200.21,17.34,197.74,16.48,194.55,16.48Z"/>
                                    </svg>

                                </Link>
                            </h1>

                            <button className="navbar-toggler collapsed" type="button" onClick={this.toggleClass}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="inline-menu  flex-lg-row-reverse">
                                <ul className="nav-left roboto-font">
                                    <li className="nav-item mobile-border dn mobile-db">
                                        <h2 className="logo">
                                            <Link className="db" title="Agentero" to="/">Agentero</Link>
                                        </h2>
                                    </li>
                                    <li className="nav-item mobile-border">
                                        <div className="nav-item__dropdown pr">
                                            <button type="button" className="dropdown-toggle fs18 c-white">
                                                Solutions
                                                <svg className="arrow-svg" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 335.87 192.04">
                                                    <path className="cls-1"
                                                          d="M168,134.15,295,7a23.9,23.9,0,0,1,33.9,0,24.2,24.2,0,0,1,0,34L185,185a24,24,0,0,1-33.1.7L7,41.15a24,24,0,0,1,33.9-34Z"/>
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">
                                                    <Link id='btnAnHeader'
                                                        className="fs16 c-custom-black  green text-decoration-none font-medium"
                                                        to="analytics">Analytics</Link>

                                                </li>
                                                <li className="dropdown-item">
                                                    <Link id='btnMobHeader'
                                                        className="fs16 c-custom-black  green text-decoration-none font-medium"
                                                        to="mobile-app">Mobile</Link></li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item mobile-border">
                                        <a id='btnBlogHeader' className="nav-item__link db  fs18 c-white text-decoration-none"
                                           target='_blank'
                                           rel="noopener noreferrer" 
                                           href="https://blog.agentero.com/">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="btnPriceHeader" className="nav-item__link db  fs18 c-white text-decoration-none"
                                              to="pricing">Pricing</Link>

                                    </li>
                                    <li className="nav-item login-item">
                                        <a href="http://my.agentero.com"
                                           className=" nav-btn__login fs18 bgc-transparent c-white">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="btnDemoHeader" className=" nav-btn__demo  fs18 bgc-white c-lightGreen" to="requestdemo">Request
                                            a demo</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse  flex-lg-row-reverse  show" id="headerNavbar">
                                <ul className="nav-left roboto-font">
                                    <li className="nav-item mobile-border dn mobile-db">
                                        <h2 className="logo">
                                            <Link
                                                onClick={() => this.HistoryPush('/')}
                                                className="db" title="Agentero" to="/">Agentero</Link>
                                        </h2>
                                    </li>
                                    <li className="nav-item mobile-border">
                                        <div className="nav-item__dropdown pr">
                                            <button type="button" className="dropdown-toggle fs18 c-white">
                                                Solutions
                                                <svg className="arrow-svg" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 335.87 192.04">
                                                    <path className="cls-1"
                                                          d="M168,134.15,295,7a23.9,23.9,0,0,1,33.9,0,24.2,24.2,0,0,1,0,34L185,185a24,24,0,0,1-33.1.7L7,41.15a24,24,0,0,1,33.9-34Z"/>
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">
                                                    <Link
                                                        onClick={() => this.HistoryPush('analytics')}
                                                        className="fs16 c-custom-black  green text-decoration-none font-medium"
                                                    >Analytics
                                                    </Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link
                                                        onClick={() => this.HistoryPush('mobile-app')}
                                                        className="fs16 c-custom-black  green text-decoration-none font-medium"
                                                    >Mobile
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item mobile-border">
                                        <a className="nav-item__link db  fs18 c-white text-decoration-none"
                                           target='_blank'
                                           rel="noopener noreferrer" 
                                           href="https://blog.agentero.com/">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            onClick={() => this.HistoryPush('Pricing')}
                                            className="fs18 c-custom-black  green text-decoration-none font-medium"
                                        >Pricing
                                        </Link>

                                    </li>
                                    <li className="nav-item login-item">
                                        <a href="http://my.agentero.com"
                                           className=" nav-btn__login fs18 bgc-transparent c-white">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className=" nav-btn__demo  fs18 bgc-white c-lightGreen" to="requestdemo">Request
                                            a demo</Link>
                                    </li>
                                </ul>
                            </div>


                        </nav>
                    </div>
                </header>
            </div>
        );
    }
};

export default withRouter(Header);
