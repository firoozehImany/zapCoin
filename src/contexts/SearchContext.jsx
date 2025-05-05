import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  return (
    <SearchContext.Provider value={{ isSearchOpen, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
