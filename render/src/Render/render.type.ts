import { IMAGE, TEXT, VIDEO } from "./constant";

export type TImage = {
  type: typeof IMAGE;
  url: string;
};

export type TText = {
  type: typeof TEXT;
  headline: string;
  description: string;
};

export type TVideo = {
  type: typeof VIDEO;
  url: string;
};

export type Props = { item: { id: number } & (TImage | TText | TVideo) };
