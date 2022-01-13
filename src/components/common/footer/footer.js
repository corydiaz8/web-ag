import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_footer.css';
import LazyLoad from 'react-lazy-fastdom';

const href = 'https://referral.agentero.com';

class Footer extends Component {
  btnRefFooter = () => {
    window.open(href);
  };

  render() {
    return (
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-8 col-lg-8 col-md-12'>
              <div className='text-lg-left text-sm-center'>
                <a className='dib footer-logo' href='#' title='Agentero'></a>
              </div>
              <div className='d-lg-block justify-content-between d-sm-flex'>
                <ul className='footer-list dib vertical-top'>
                  <li className='footer-list__item'>
                    <p className='footer-list__link fs16 font-bold mb-0 c-white'>
                      Solutions
                    </p>
                  </li>
                  <li className='footer-list__item'>
                    <Link
                      id='btnAnFooter'
                      className='footer-list__link fs14 text-decoration-none'
                      to='analytics'
                    >
                      Analytics
                    </Link>
                  </li>
                  <li className='footer-list__item'>
                    <Link
                      id='btnMobFooter'
                      className='footer-list__link fs14 text-decoration-none'
                      to='mobile-app'
                    >
                      Mobile
                    </Link>
                  </li>
                </ul>
                <ul className='footer-list footer-info dib vertical-top'>
                  <li className='footer-list__item'>
                    <p className='footer-list__link fs16 font-bold c-white mb-0'>
                      Contact Us
                    </p>
                  </li>
                  <li className='footer-list__item'>
                    <a
                      href='mailto:contact@agentero.com'
                      className='footer-list__link fs14 text-decoration-none'
                    >
                      contact@agentero.com
                    </a>
                  </li>
                  <li className='footer-list__item'>
                    <a
                      href='tel:4156042324'
                      className='footer-list__link fs14 text-decoration-none'
                    >
                      (415) 604-2324
                    </a>
                  </li>
                </ul>
                <ul className='footer-list footer-info dib vertical-top'>
                  <li className='footer-list__item'>
                    <Link
                      id='btnDemoFooter'
                      className='footer-list__link fs14 text-decoration-none'
                      to='requestdemo'
                    >
                      Request Demo
                    </Link>
                  </li>
                  <li className='footer-list__item'>
                    <Link
                      id='btnPriceFooter'
                      className='footer-list__link fs14 text-decoration-none'
                      to='pricing'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className='footer-list__item'>
                    <span
                      onClick={e => this.btnRefFooter()}
                      id='btnRefFooter'
                      className='cursor-pointer footer-list__link fs14 text-decoration-none'
                    >
                      Referral program{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 text-lg-right'>
              <ul className='footer-list right'>
                <li className='footer-list__item social'>
                  <a
                    id='btnFbFooter'
                    href='https://www.facebook.com/agenteroInc/?_ga=2.29165498.708100484.1565249115-191341075.1564391820'
                    title='Facebook'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer-list__link inline text-decoration-none'
                  >
                    <LazyLoad offsetVertical={300}>
                      <svg
                        className='social-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 274.22 512'
                      >
                        <path
                          className='cls-1'
                          d='M256.25,288l14.22-92.66H181.56V135.21c0-25.35,12.42-50.06,52.24-50.06h40.42V6.26S237.54,0,202.47,0C129.25,0,81.39,44.38,81.39,124.72v70.62H0V288H81.39V512H181.56V288Z'
                        />
                      </svg>
                    </LazyLoad>
                  </a>
                  <a
                    id='btnTwFooter'
                    href='https://twitter.com/Agentero1'
                    title='twitter'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer-list__link inline text-decoration-none'
                  >
                    <LazyLoad offsetVertical={300}>
                      <svg
                        className='social-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 415.84'
                      >
                        <path
                          className='cls-1'
                          d='M459.37,103.63c.33,4.55.33,9.1.33,13.65,0,138.72-105.58,298.56-298.56,298.56A296.53,296.53,0,0,1,0,368.73,217.08,217.08,0,0,0,25.34,370,210.15,210.15,0,0,0,155.61,325.2,105.12,105.12,0,0,1,57.5,252.43,132.33,132.33,0,0,0,77.32,254a111,111,0,0,0,27.61-3.57,105,105,0,0,1-84.14-103v-1.3a105.68,105.68,0,0,0,47.43,13.32A105.09,105.09,0,0,1,35.74,19.17,298.27,298.27,0,0,0,252.1,129a118.46,118.46,0,0,1-2.6-24,105,105,0,0,1,181.6-71.8A206.6,206.6,0,0,0,497.7,7.8a104.65,104.65,0,0,1-46.13,57.83A210.36,210.36,0,0,0,512,49.38a225.57,225.57,0,0,1-52.63,54.25Z'
                        />
                      </svg>
                    </LazyLoad>
                  </a>
                  <a
                    id='btnLkFooter'
                    href='https://www.linkedin.com/company/agentero/?_ga=2.29165498.708100484.1565249115-191341075.1564391820'
                    title='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer-list__link inline text-decoration-none'
                  >
                    <LazyLoad offsetVertical={300}>
                      <svg
                        className='social-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 448'
                      >
                        <path
                          className='cls-1'
                          d='M416,0H31.9A32.14,32.14,0,0,0,0,32.3V415.7A32.14,32.14,0,0,0,31.9,448H416a32.22,32.22,0,0,0,32-32.3V32.3A32.22,32.22,0,0,0,416,0ZM135.4,384H69V170.2h66.5V384ZM102.2,141a38.5,38.5,0,1,1,38.5-38.5A38.52,38.52,0,0,1,102.2,141ZM384.3,384H317.9V280c0-24.8-.5-56.7-34.5-56.7-34.6,0-39.9,27-39.9,54.9V384H177.1V170.2h63.7v29.2h.9c8.9-16.8,30.6-34.5,62.9-34.5,67.2,0,79.7,44.3,79.7,101.9Z'
                        />
                      </svg>
                    </LazyLoad>
                  </a>
                </li>
                <li className='footer-list__item mb-22px'>
                  <Link
                    className='footer-list__link fs14 text-decoration-none'
                    to='terms-of-use'
                  >
                    Terms of use
                  </Link>
                  <span className='footer-list__link fs14 mx-2'> |</span>
                  <Link
                    className='footer-list__link fs14 text-decoration-none'
                    to='privacy-policy'
                  >
                    Privacy policy
                  </Link>
                </li>

                <li className='footer-list__item fs14 mb-28px'>
                  {' '}
                  Made with
                  <svg
                    className='heart-svg mx-1 dib'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512.01 448.01'
                  >
                    <path
                      className='cls-1'
                      d='M462.31,30.63c-54.8-46.7-136.3-38.3-186.6,13.6L256,64.53l-19.7-20.3c-50.2-51.9-131.8-60.3-186.6-13.6-62.8,53.6-66.1,149.8-9.9,207.9l193.5,199.8a31.35,31.35,0,0,0,45.3,0l193.5-199.8c56.3-58.1,53-154.3-9.8-207.9Z'
                    />
                  </svg>
                  in Silicon Valley
                </li>
                <li className='footer-list__item fs14 text-decoration-none'>
                  © 2019 Agentero Inc., All Rights Reserved
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
