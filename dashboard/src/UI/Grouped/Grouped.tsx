import { Props } from "./grouped.type.ts";
import css from "./grouped.module.css";

const Grouped = ({ children }: Props) => {
  return <div className={css.grouped}>{children}</div>;
};

export default Grouped;
