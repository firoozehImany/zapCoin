import { useParams } from "react-router-dom";
import { useAssetHistory } from "./useAssetHistory";
import { getChartOptions } from "../utils/chartOptions";

export const useAssetChart = ({ interval = "d1" }) => {
  const { id } = useParams();
  const { assetHistory, loading, error } = useAssetHistory(id, interval);
  const chartData = assetHistory.map((item) => [
    new Date(item.time).getTime(),
    parseFloat(item.priceUsd),
  ]);

  const options = getChartOptions({ chartData, assetId: id });

  return {
    loading: loading || error,
    hasData: assetHistory.length > 0,
    options,
  };
};
