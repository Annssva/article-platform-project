import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Counter} from "./components/Counter";
import "./styles/index.scss"
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classnames} from "./helpers/classnames/classnames";



const App = () => {
const {theme, toggleTheme} = useTheme();
  return (
    <div className={classnames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle THEME</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}/>
          <Route path={'/about'} element={<AboutPageAsync />}/>

        </Routes>
      </Suspense>


    </div>
  );
};

export default App;