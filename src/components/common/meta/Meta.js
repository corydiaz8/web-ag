import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Meta extends Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta
          name='description'
          content='Sell more policies with Agentero’s opportunity management system and mobile app. Learn how to grow your insurance agency.'
        />
        <meta property='og:url' content='https://www.agentero.com' />
        <meta
          property='og:description'
          content="Agentero's sales and service platform delivers new business opportunities and a superior customer experience. Sign up with Agentero and grow your insurance agency with happy clients."
        />
        <meta property='og:type' content='website' />
        {/*<meta property="og:image" content="http://www.mysite.com/articleimage.jpg"/>*/}
      </Helmet>
    );
  }
}

export default Meta;
