import { ChangeEvent } from "react";

export type TOption = {
  id: string;
  label: string;
  value: string;
};

export type Props = {
  options: TOption[];
  value: TOption["value"];
  onChangeFn: (event: ChangeEvent<HTMLSelectElement>) => void
};
