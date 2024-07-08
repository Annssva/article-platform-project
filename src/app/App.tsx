import React from 'react';
import { Link} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {
const {theme, toggleTheme} = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />


    </div>
  );
};

export default App;