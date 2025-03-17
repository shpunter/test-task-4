import css from "./label.module.css";
import { Props } from "./label.typs";

const MAP = {
  video: "Video",
  image: "Image",
  text: "Text",
} as const;

const Label = ({ text }: Props) => {
  return <div  data-testid="label-test" className={css.label} data-label={MAP[text]} />;
};

export default Label;
