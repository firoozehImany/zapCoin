import { IconButton } from "../customComponents/IconButton";
import { SearchOutlined } from "@ant-design/icons";
import { useSearch } from "../../contexts/SearchContext";

export const SearchButton = () => {
  const { isSearchOpen, toggleSearch } = useSearch();
  return (
    <IconButton
      style={{ fontSize: "22px" }}
      icon={<SearchOutlined />}
      onClick={toggleSearch}
      active={isSearchOpen}
    />
  );
};
