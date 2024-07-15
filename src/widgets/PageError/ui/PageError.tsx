import { classnames } from "shared/lib/classnames/classnames";
import styles from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface PageErrorProps {
  classname?: string;
}

export const PageError = ({ classname }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classnames(styles.PageError, {}, [classname])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Перезагрузить страницу")}</Button>
    </div>
  );
};
