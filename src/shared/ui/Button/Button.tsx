import { classnames } from 'shared/lib/classnames/classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classnames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
      type={'button'}
    >
      {children}
    </button>
  );
};
