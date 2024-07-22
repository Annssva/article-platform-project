import React, { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classnames } from 'shared/lib/classnames/classnames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => (
  <div className={classnames('app', {}, [])}>
    <Suspense fallback="Loading...">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
export default App;
