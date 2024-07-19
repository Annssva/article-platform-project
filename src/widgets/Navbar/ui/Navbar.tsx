import React from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classnames(styles.Navbar, {}, [classname])}>
      <div className={styles.links}>
        /
      </div>
    </div>
  );
};
