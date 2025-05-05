import { useExchanges } from "../../contexts/ExchangesContext";
import { exchangeDataProcessor } from "../../utils/exchangesData";
import { marketDataProcessor } from "../../utils/marketData";
import { mergeExchangeAndMarket } from "../../utils/mergeExchangeAndMarket";
import ExchangesTable from "./ExchangesTable";

export default function ExchangesTableView() {
  const { exchanges, markets, loading, error } = useExchanges();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const processedExchangesData = exchangeDataProcessor(exchanges);
  const processedMarketsData = marketDataProcessor(markets);
  const mergedData = mergeExchangeAndMarket(
    processedExchangesData,
    processedMarketsData
  );

  return <ExchangesTable data={mergedData} />;
}
