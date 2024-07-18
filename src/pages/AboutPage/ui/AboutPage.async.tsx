import React from 'react';

// prettier-ignore
export const AboutPageAsync = React.lazy(() => (
  new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  })
));
