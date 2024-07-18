import { classnames } from 'shared/lib/classnames/classnames';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  classname?: string;
}

export const NotFoundPage = ({ classname }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classnames(styles.NotFoundPage, {}, [classname])}>
      {t('Страница не найдена')}
    </div>
  );
};
