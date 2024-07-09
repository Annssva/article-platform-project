import { classnames } from "shared/lib/classnames/classnames";
import styles from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  classname?: string;
}

export const PageLoader = ({ classname }: PageLoaderProps) => {
  return (
    <div className={classnames(styles.PageLoader, {}, [classname])}>
      <Loader />
    </div>
  );
};
