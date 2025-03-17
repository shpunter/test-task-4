import { TItem } from "./items.type.ts";

export const calcTotals = (items: TItem[]) => {
  return items.reduce(
    (acc, { impressions, clicks, ctr }) => {
      acc.ctr += ctr;
      acc.clicks += clicks;
      acc.impressions += impressions;

      return acc;
    },
    { impressions: 0, clicks: 0, ctr: 0 },
  );
};
