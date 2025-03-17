import { TYPES, TEXT, VIDEO, IMAGE  } from "./constant.ts";

type TImage = { type: typeof IMAGE; url: string };

type TText = {
  type: typeof TEXT;
  headline: string;
  description: string;
};

type TVideo = { type: typeof VIDEO; url: string };

export type TItem = { id: number } & (TImage | TText | TVideo) & {
  impressions: number;
  clicks: number;
  ctr: number;
};

export type TType = typeof TYPES[number];