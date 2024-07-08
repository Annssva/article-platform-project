import React from 'react';
import { Link} from 'react-router-dom';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";



const App = () => {
const {theme} = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>



    </div>
  );
};

export default App;