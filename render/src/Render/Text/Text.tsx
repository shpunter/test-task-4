import { Props } from "./text.type";
import css from "./text.module.css";

const Text = ({ item: { headline, description } }: Props) => {
  return (
    <div  data-testid="text-test" className={css.wrapper}>
      <h3>{headline}</h3>
      <div className={css.description}>{description}</div>
    </div>
  );
};

export default Text;
