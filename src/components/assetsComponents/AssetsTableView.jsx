import { useAssets } from "../../contexts/AssetsContext";
import { assetsDataProcessor } from "../../utils/assetsData";
import AssetsTable from "./AssetsTable";

export default function AssetsTableView() {
  const { assets, loading, error } = useAssets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const processedData = assetsDataProcessor(assets);

  return <AssetsTable data={processedData} />;
}
