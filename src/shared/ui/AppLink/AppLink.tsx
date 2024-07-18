import { classnames } from 'shared/lib/classnames/classnames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  classname?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = props => {
  const {
    to,
    classname,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classnames(styles.AppLink, {}, [classname, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
