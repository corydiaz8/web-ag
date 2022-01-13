import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import PricingForm from '../components/pricing/pricing-section/pricing';

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta
            name='description'
            content='Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers.'
          />
          <meta property='og:url' content='https://www.agentero.com/agents' />
          <meta
            property='og:description'
            content='Agentero is digitizing and simplifying the distribution of insurance. We believe in the combination of technology with the trusted advisor. Sign up to Agentero and grow your agency with happy customers.'
          />
        </Helmet>
        <main>
          <PricingForm />
        </main>
      </div>
    );
  }
}
