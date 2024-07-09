import { classnames } from "shared/lib/classnames/classnames";
import "./Loader.scss";

interface LoaderProps {
  classname?: string;
}

export const Loader = ({ classname }: LoaderProps) => {
  return (
    <div className={classnames("lds-ripple", {}, [classname])}>
      <div></div>
      <div></div>
    </div>
  );
};
