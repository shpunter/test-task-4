import { useParams } from "@tanstack/react-router";
import Grouped from "/src/UI/Grouped/Grouped.tsx";
import Header from "./Header/Header.tsx";
import { useFetchItems } from "./items.hook.ts";
import { calcTotals } from "./utils.ts";
import Item from "./Item/Item.tsx";
import Total from "./Total/Total.tsx";
import css from "./items.module.css";
import { ALL } from "./constant.ts";
import { useSearch } from "@tanstack/react-router";

const Items = () => {
  const { api } = useParams({ from: "/$api" });
  const { type } = useSearch({ from: "/$api" });
  const { data } = useFetchItems(api);
  
  const items = data.filter((item) => type === ALL || type === item.type);

  return (
    <div className={css.wrapper}>
      <Header />
      <Total {...calcTotals(items)} />
      <Grouped>
        {items.map((item) => <Item key={item.id} {...item} />)}
      </Grouped>
    </div>
  );
};

export default Items;
