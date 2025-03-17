import { Props } from "./dropdown.type.ts";
import Option from "./Option/Option.tsx";
import { useEffect, useRef } from "react";

import "./dropdown.module.css";

const DropDown = ({ options, onChangeFn, value }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.value = value;
  }, []);

  return (
    <select onChange={onChangeFn} ref={ref}>
      {options.map(({ id, value, label }) => {
        return <Option key={id} value={value} label={label} />;
      })}
    </select>
  );
};

export default DropDown;
