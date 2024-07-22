import { classnames } from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  classname?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  classname,
  text,
  title,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  const { t } = useTranslation();
  return (
    <div className={classnames(styles.Text, { [styles[theme]]: true }, [classname])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
