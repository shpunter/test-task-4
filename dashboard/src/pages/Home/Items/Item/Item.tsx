import Render from "remoteApp/Render";
import css from "./item.module.css";
import { formatToNumber, formatToPercent } from "/src/utils/utils.ts";
import { TItem } from "../items.type.ts";
import Card from "/src/UI/Card/Card.tsx";

const Item = (item: TItem) => {
  return (
    <Card>
      <div className={css.content}>
        <div className={css.render}>
          <Render item={item} />
        </div>
        <div className={css.footer}>
          <span className={css.title}>Impressions</span>
          <span className={css.title}>Clicks</span>
          <span className={css.title}>CTR</span>
          <span className={css.value}>{formatToNumber(item.impressions)}</span>
          <span className={css.value}>{formatToNumber(item.clicks)}</span>
          <span className={css.value}>{formatToPercent(item.ctr)}</span>
        </div>
      </div>
    </Card>
  );
};

export default Item;
