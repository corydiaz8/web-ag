import React, { Component } from 'react';

import './_connected.css';
import $ from 'jquery';
class Connected extends Component {
  constructor(props) {
    super(props);
    this.subscribeEmail = this.subscribeEmail.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { email: '' };
  }

  subscribeEmail() {
    const { email } = this.state;
    const data = JSON.stringify({ email });

    const request = new Request(
      'https://us-central1-agentero-website.cloudfunctions.net/app/add-newsletter-subscription',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: data
      }
    );

    fetch(request)
      .then(data => {
        if (data.status < 400) {
          this.setState({ email: '' });
          $('#signupModal').modal('show');
        } else {
          console.log('Error newsletter:', data);
          alert('Error while sending message');
        }
      })
      .catch(reason => {
        console.log('Catch error newsletter:', reason);
        alert('Error while accessing Agentero server');
      });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  checkValidation(ev) {
    ev.preventDefault();
    const { email } = this.state;
    let emailError = '';
    if (!email || !this.validateEmail(email)) {
      emailError = 'Email is not valid';
      this.setState({ emailError });
    } else {
      this.subscribeEmail();
    }
  }

  handleInputChange(ev) {
    ev.preventDefault();
    const { emailError } = this.state;
    const value = ev.target.value;
    this.setState({ email: value, emailError: !value ? '' : emailError });
  }
  render() {
    const { email, emailError } = this.state;
    return (
      <section className='connected-section'>
        <div className='container-fluid big-container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2 className='connected-section__title fs22 c-darkBlue font-bold'>
                Stay connected!{' '}
              </h2>
              <p className='connected-section__txt fs18 c-darkBlue roboto-font'>
                Subscribe to get the latest updates and exclusive content.
              </p>
              <form className='new-newsletter' onSubmit={this.checkValidation}>
                <div className='form-group mb-0 dib roboto-font'>
                  <input
                    type='text'
                    placeholder='Your email'
                    className='connected-email'
                    name='email'
                    value={email}
                    autoComplete='off'
                    onChange={this.handleInputChange}
                  />
                  <input
                    id='btnSignUp'
                    type='submit'
                    className='connected-btn font-bold roboto-font'
                    value='Sign Up'
                  />
                  <span className='error-label'>{emailError}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Connected;
