import { Props } from "./video.type";
import css from "./video.module.css";

const Video = ({ item: { url } }: Props) => {
  return (
    <video data-testid="video-test" className={css.video} controls>
      <source src={url} />
    </video>
  );
};

export default Video;
