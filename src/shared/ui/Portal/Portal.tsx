import { classnames } from 'shared/lib/classnames/classnames';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Portal.module.scss';

interface PortalProps {
  children?: ReactNode; // ЧТО импортируем
  element?: HTMLElement; // КУДА импортируем
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
