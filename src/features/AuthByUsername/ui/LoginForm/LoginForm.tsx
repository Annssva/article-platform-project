import { classnames } from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  classname?: string;
}

export const LoginForm = ({ classname }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classnames(styles.LoginForm, {}, [classname])}>
      <Input autoFocus placeholder={t('Введите username')} type="text" classname={styles.inputt} />
      <Input placeholder={t('Введите пароль')} type="text" classname={styles.input} />
      <Button className={styles.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
