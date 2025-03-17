import { Props } from "./image.type";
import css from "./image.module.css";

const Image = ({ item: { url } }: Props) => {
  return <img data-testid="image-test" className={css.image} src={url} />;
};

export default Image;
