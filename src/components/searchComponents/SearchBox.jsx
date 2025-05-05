import { SearchBoxStyle } from "../../styles/searchBoxStyle";
import { useSearch } from "../../contexts/SearchContext";
import { SearchAutoComplete } from "./SearchAutoComplete";

export const SearchBox = () => {
  const { isSearchOpen } = useSearch();
  return (
    <SearchBoxStyle $isOpen={isSearchOpen} onClick={(e) => e.stopPropagation()}>
      <SearchAutoComplete />
    </SearchBoxStyle>
  );
};
