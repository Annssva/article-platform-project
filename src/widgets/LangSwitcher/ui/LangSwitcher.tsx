import { classnames } from "shared/lib/classnames/classnames";
import styles from './LangSwitcher.module.scss';
import { useTranslation } from "react-i18next";
import React from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  classname?: string;
}

export const LangSwitcher = ({classname}: LangSwitcherProps) => {

  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggle}
        className={classnames(styles.LangSwitcher, {}, [classname])}
      >
        {t('Язык')}
      </Button>
  )

};

