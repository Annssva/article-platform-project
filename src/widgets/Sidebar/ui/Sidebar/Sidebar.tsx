import { classnames } from 'shared/lib/classnames/classnames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  classname?: string;
}

export const Sidebar = ({ classname }: SidebarProps) => {
  const { t } = useTranslation('main');
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  };
  return (
    <div
      data-testid='sidebar'
      className={classnames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        classname,
      ])}
    >
      <button data-testid='sidebar-toggle' onClick={onToggle} type='button'>
        {t('Переключатель')}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher classname={styles.langSwitcher} />
      </div>
    </div>
  );
};
