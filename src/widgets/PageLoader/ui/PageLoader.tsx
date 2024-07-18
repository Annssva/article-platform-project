import { classnames } from 'shared/lib/classnames/classnames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

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
