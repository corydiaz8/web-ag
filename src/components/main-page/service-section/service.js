import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-fastdom';
import './_service.css';
import box_brain from '../../../assets/images/box-brain1.svg';
import box_buildings from '../../../assets/images/box-buildings.svg';
import box_phone from '../../../assets/images/box-phone.svg';
import box_seaside from '../../../assets/images/box-seaside.svg';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollToTop = this.scrollToTop.bind(this); // Create a ref object
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <section className='service-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className='max-w840 mx-auto text-center'>
                <h2 className='section__title fs44 font-medium c-green  mx-auto'>
                  A complete solution to grow your agency. All in one platform.
                </h2>
                <p className='fs18 c-gray section__txt roboto-font font-light'>
                  An opportunity management system and service hub that
                  integrate with your current technology.
                </p>
              </div>
            </div>
            <div className='col-12 d-flex justify-content-center flex-wrap flex-xl-nowrap'>
              <div className='service-box'>
                <div className='service-box__circle'>
                  <LazyLoad offsetVertical={0}>
                    <img src={box_brain} alt='brain' className='img-mozg' />
                  </LazyLoad>
                </div>
                <LazyLoad offsetVertical={0}>
                  <img
                    src={box_buildings}
                    alt='buildings'
                    className='service-box__buildings'
                  />
                </LazyLoad>

                <h2 className='service-box__title fs44 font-semi-bold c-green'>
                  Optimize your book with analytics
                </h2>
                <p className='service-box__txt fs18 c-gray'>
                  An opportunity management system powered by advanced analytics
                  that increases revenue per client, fills your pipeline and
                  improves your sales efficiency.{' '}
                </p>
                <p className='service-box__key fs18 c-gray font-medium'>
                  Key features
                </p>
                <ul className='service-box__list'>
                  <li className='fs18 c-gray'>Renewal prioritization</li>
                  <li className='fs18 c-gray'>Policy recommendation</li>
                  <li className='fs18 c-gray'>Coverage optimization</li>
                </ul>
                <div className='custom-text-position'>
                  <Link
                    id='btnLearnAn'
                    to='analytics'
                    className='btn service-box__btn cursor-pointer c-green-border c-green fs18 font-medium'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className='service-box'>
                <div className='service-box__circle'>
                  <LazyLoad offsetVertical={0}>
                    <img src={box_phone} alt='phone' className='img-phone' />
                  </LazyLoad>
                </div>
                <LazyLoad offsetVertical={0}>
                  <img
                    src={box_seaside}
                    alt='seaside'
                    className='service-box__seaside'
                  />
                </LazyLoad>

                <h2 className='service-box__title fs44 font-semi-bold c-green'>
                  Serve your clients digitally
                </h2>
                <p className='service-box__txt fs18 c-gray'>
                  A mobile app for your agency to maximize client value, deliver
                  superior customer experience and automate back-office tasks.
                </p>
                <p className='service-box__key fs18 c-gray font-medium'>
                  Key features
                </p>
                <ul className='service-box__list'>
                  <li className='fs18 c-gray'>Insurance wallet</li>
                  <li className='fs18 c-gray'>Quote & service requests</li>
                  <li className='fs18 c-gray'>Referral program</li>
                </ul>
                <div className='custom-text-position'>
                  <Link
                    id='btnLearnMob'
                    to='mobile-app'
                    className='btn service-box__btn cursor-pointer c-green-border c-green fs18 font-medium'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
