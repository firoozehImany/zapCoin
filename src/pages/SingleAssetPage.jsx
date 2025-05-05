import SingleAsset from "../components/assetsComponents/singleAsset";
import ChartContainer from "../components/ChartComponents/ChartContainer";
import ExchangesTableView from "../components/exchangesComponents/ExchangesTableView";

export default function AssetPage() {
  return (
    <>
      <SingleAsset />
      <ChartContainer />
      <ExchangesTableView />
    </>
  );
}
