import React from 'react';
import { Link} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/router";



const App = () => {
const {theme, toggleTheme} = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle THEME</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />


    </div>
  );
};

export default App;