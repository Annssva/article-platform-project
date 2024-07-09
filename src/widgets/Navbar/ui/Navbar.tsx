import React from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import i18n from 'i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => (
  <div className={classnames(styles.Navbar, {}, [classname])}>
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={styles.mainLink}
      >
        {i18n.t('главная')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {i18n.t('О сайте')}
      </AppLink>
    </div>
  </div>
);
