import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { useAssets } from "../../contexts/AssetsContext";
import { useExchanges } from "../../contexts/ExchangesContext";
import { useNavigate } from "react-router";
import { useSearch } from "../../contexts/SearchContext";

export const SearchAutoComplete = () => {
  const { assets } = useAssets();
  const { exchanges } = useExchanges();
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { toggleSearch } = useSearch();

  const handleSearch = (value) => {
    setSearchValue(value);
    if (!value) {
      setSearchResults([]);
      return;
    }
    const assetResults = assets
      .filter((asset) =>
        asset.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5)
      .map((asset) => ({
        value: asset.id,
        label: asset.name,
        type: "asset",
      }));

    const exchangeResults = exchanges
      .filter((exchange) =>
        exchange.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5)
      .map((exchange) => ({
        value: exchange.exchangeId,
        label: exchange.name,
        type: "exchange",
      }));

    const groupedResults = [
      {
        label: "Assets",
        options: assetResults,
      },
      {
        label: "Exchanges",
        options: exchangeResults,
      },
    ].filter((group) => group.options.length > 0);

    setSearchResults(groupedResults);
  };

  const handleSelect = (id, option) => {
    if (option.type === "asset") {
      navigate(`/assets/${id}`);
    } else {
      navigate(`/exchanges/${id}`);
    }
    setSearchValue("");
    setSearchResults([]);
    toggleSearch();
  };

  return (
    <AutoComplete
      options={searchResults}
      onSearch={handleSearch}
      onSelect={handleSelect}
      style={{ width: "100%" }}
      value={searchValue}
      onChange={setSearchValue}
    >
      <Input placeholder="Search" />
    </AutoComplete>
  );
};
