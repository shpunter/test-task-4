import { Props } from "./card.type.ts";
import css from "./card.module.css";

const Card = ({ children }: Props) => {
  return (
    <div className={css.item}>
      {children}
    </div>
  );
};

export default Card;
