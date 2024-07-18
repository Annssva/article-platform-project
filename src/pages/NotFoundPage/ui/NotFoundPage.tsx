import { classnames } from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

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
