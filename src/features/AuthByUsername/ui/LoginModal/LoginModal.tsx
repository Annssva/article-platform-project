import { classnames } from 'shared/lib/classnames/classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  classname?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ classname, isOpen, onClose }: LoginModalProps) => {
  const a = 5;
  return (
    <Modal
      classname={classnames(styles.LoginModal, {}, [classname])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
