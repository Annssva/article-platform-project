import { classnames } from "shared/lib/classnames/classnames";
import styles from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
  classname?: string;
}

export const Sidebar = ({classname}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classnames(styles.Sidebar, {[styles.collapsed]: collapsed}, [classname])}>
      <button onClick={onToggle}> toggle </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
