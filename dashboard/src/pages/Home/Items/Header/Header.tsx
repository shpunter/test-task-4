import { ChangeEvent } from "react";
import { useSearch } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import DropDown from "/src/UI/DropDown/DropDown.tsx";
import { TType } from "../items.type.ts";
import { ALL, IMAGE, TEXT, VIDEO } from "../constant.ts";
import css from "./header.module.css";

const OPTIONS = [
  { id: "all", label: "All", value: ALL },
  { id: "video", label: "Video", value: VIDEO },
  { id: "text", label: "Text", value: TEXT },
  { id: "image", label: "Image", value: IMAGE },
];

const Header = () => {
  const navigate = useNavigate({ from: "/$api" });
  const {type} = useSearch({from: "/$api"})

  const onChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.selectedOptions.item(0)?.value as TType ?? ALL;

    navigate({ search: { type: value } });
  };

  return (
    <div className={css.header}>
      <h2>
        Ad Performance Dashboard
      </h2>
      <DropDown
        options={OPTIONS}
        value={type}
        onChangeFn={onChangeType}
      />
    </div>
  );
};

export default Header;
