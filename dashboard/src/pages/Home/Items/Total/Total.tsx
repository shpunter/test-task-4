

import Grouped from "../../../../UI/Grouped/Grouped.tsx";
import css from "./total.module.css";
import { Props } from "./total.type.ts";
import Card from "/src/UI/Card/Card.tsx";
import { formatToNumber, formatToPercent } from "/src/utils/utils.ts";

const Total = ({ clicks, ctr, impressions }: Props) => {
  return (
    <Grouped>
      <Card>
        <div className={css.wrapper}>
          <div className={css.title}>Total Impressions</div>
          <div className={css.value}>{formatToNumber(impressions)}</div>
        </div>
      </Card>
      <Card>
        <div className={css.wrapper}>
          <div className={css.title}>Total Clicks</div>
          <div className={css.value}>{formatToNumber(clicks)}</div>
        </div>
      </Card>
      <Card>
        <div className={css.wrapper}>
          <div className={css.title}>Average CTR</div>
          <div className={css.value}>{formatToPercent(ctr)}</div>
        </div>
      </Card>
    </Grouped>
  );
};

export default Total;
