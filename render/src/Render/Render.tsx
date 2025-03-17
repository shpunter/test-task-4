import { IMAGE, TEXT, VIDEO } from "./constant";
import Image from "./Image/Image";
import Label from "./Label/Label";
import { Props } from "./render.type";
import Text from "./Text/Text";
import Video from "./Video/Video";

const Render = ({ item }: Props) => {
  const map = {
    [VIDEO]: item.type === VIDEO && <Video item={item} />,
    [IMAGE]: item.type === IMAGE && <Image item={item} />,
    [TEXT]: item.type === TEXT && <Text item={item} />,
  };

  return (
    <>
      <Label text={item.type} />
      {map[item.type]}
    </>
  );
};

export default Render;
