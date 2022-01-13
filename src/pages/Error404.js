import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../components/notfound/NotFound';

const Error404 = ({ match }) => {
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
        <NotFound url={match.params.url} />
      </main>
    </div>
  );
};

export default Error404;
