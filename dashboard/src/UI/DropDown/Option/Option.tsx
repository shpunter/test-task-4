import { Props } from "/src/UI/DropDown/Option/option.type.ts";

const Option = ({ value, label }: Props) => {
  return <option value={value}>{label}</option>;
};

export default Option;
