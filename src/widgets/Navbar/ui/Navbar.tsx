import React from 'react';
import {classnames} from "shared/lib/classnames/classnames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({classname}: NavbarProps) => {
  return (
    <div className={classnames(styles.Navbar, {}, [classname])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
      </div>

    </div>
  );
};

