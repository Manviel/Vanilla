import React from 'react';

import Header, { BackwardNavigation } from '../Header';

const PageDecorator = ({ children, headline, subtitle }) => {
  return (
    <main id='app' className='app flex col content-full'>
      <BackwardNavigation subtitle={subtitle} />

      <div className='panel content-full flex col'>
        <Header spot={headline} />

        {children}
      </div>
    </main>
  );
};

export default PageDecorator;
