import React, {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classnames/classnames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";



const App = () => {
const {theme, toggleTheme} = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle THEME</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />}/>
          <Route path={'/about'} element={<AboutPage />}/>

        </Routes>
      </Suspense>


    </div>
  );
};

export default App;