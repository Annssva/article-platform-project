import { classnames } from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  classname?: string;
  short?: boolean;
}

export const LangSwitcher = ({ classname, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classnames(styles.LangSwitcher, {}, [classname])}
    >
      {t(short ? 'Язык коротко' : 'Язык')}
    </Button>
  );
};
