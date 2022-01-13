import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-fastdom';
import './_quote.css';
import user_img5 from '../../../assets/images/user-img5.png';

class Quote extends Component {
  messageAnimation = el => {
    this.props.message_element.push(el);
  };

  render() {
    return (
      <section className='quote-section'>
        <div className='container-fluid big-container'>
          <div className='row flex-lg-row flex-column'>
            <div className='col-lg-6 col-xl-5'>
              <div className='quote-box'>
                <div className='quote-user'>
                  <div className='d-flex_item text-right'>
                    <h3 className='quote-user__name fs30 c-darkBlue font-bold'>
                      Eric Plourde
                    </h3>
                    <p className='quote-user__role fs20 c-darkBlue'>
                      SEEC Financial LLC
                    </p>
                  </div>
                  <div className='d-flex_item'>
                    <LazyLoad offsetVertical={300}>
                      <div
                        className='quote-box__circle'
                        style={{ backgroundImage: 'url(' + user_img5 + ')' }}
                      ></div>
                    </LazyLoad>
                  </div>
                </div>
                <div className='quote-message'>
                  <p className='quote-message__txt fs16 c-green-border-quote-message c-darkBlue bgc-white font-medium roboto-font'>
                    “Agentero offers products that help any modern day agent
                    continue growth into our very challenging future as
                    technology moves forward at a fast pace.”
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-6 offset-xl-1 col-xl-6 '>
              <h2 className='fs50 c-darkBlue section__title'>
                Go digital. Grow your agency today!
              </h2>
              <Link
                id='btnDemoBottom'
                to='requestdemo'
                className='btn btn__demo fs18 bgc-green c-white font-medium mb-3 roboto-font'
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quote;
