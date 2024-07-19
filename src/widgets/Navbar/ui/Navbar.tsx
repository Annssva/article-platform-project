import React, { useCallback, useState } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classnames(styles.Navbar, {}, [classname])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt esse et impedit ipsa obcaecati perferendis possimus quibusdam quod quos.
      </Modal>
    </div>
  );
};
