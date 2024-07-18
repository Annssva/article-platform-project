import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// prettier-ignore
export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
