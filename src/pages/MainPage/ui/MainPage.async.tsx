import React from 'react';

// prettier-ignore
export const MainPageAsync = React.lazy(() => (
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
));
