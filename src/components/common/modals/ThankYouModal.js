import React, { Component } from 'react';
import './_ThankYouModal.css';
import icon_facebook from '../../../assets/images/icon-facebook.svg';
import icon_twitter from '../../../assets/images/icon-twitter.svg';
import icon_linkedin from '../../../assets/images/icon-linkedin.svg';

class ThankYouModal extends Component {
  render() {
    let title = this.props['title'];
    return (
      <div
        className='modal fade'
        id='thankYouModal'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title c-green fs30 font-bold'>Thank you!</h5>
            </div>
            <div className='modal-body text-center'>
              <div className='subtitle fs20 font-bold c-darkBlue'>
                <p>
                  We have received your request for {title} and will follow up
                  shortly.
                </p>
              </div>
              <div className='follow-box fs15 font-bold c-darkBlue'>
                <p>Follow us !</p>
                <ul className='follow-list'>
                  <li className='follow-list__item'>
                    <a
                      href='https://www.facebook.com/agenteroInc'
                      title='Facebook'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='follow-list__link text-decoration-none'
                    >
                      <img
                        src={icon_facebook}
                        alt='facebook'
                        title='facebook'
                        className='follow-list__icon'
                      />
                    </a>
                  </li>
                  <li className='follow-list__item'>
                    <a
                      href='https://twitter.com/Agentero1'
                      title='twitter'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='follow-list__link text-decoration-none'
                    >
                      <img
                        src={icon_twitter}
                        alt='twitter'
                        title='twitter'
                        className='follow-list__icon'
                      />
                    </a>
                  </li>
                  <li className='follow-list__item'>
                    <a
                      href='https://www.linkedin.com/company/agentero'
                      title='LinkedIn'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='follow-list__link text-decoration-none'
                    >
                      <img
                        src={icon_linkedin}
                        alt='linkedin'
                        title='linkedin'
                        className='follow-list__icon'
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className='btn btn-ok bgc-darkBlue c-white font-medium fs15'
                href='/'
              >
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYouModal;
