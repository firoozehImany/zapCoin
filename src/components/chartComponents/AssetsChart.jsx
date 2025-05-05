import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAssetChart } from "../../hooks/useAssetChart";

export default function AssetChart({ interval = "d1" }) {
  const { loading, hasData, options } = useAssetChart({ interval });

  if (loading) return <p>Loading chart...</p>;
  if (!hasData) return <p>There is nothing to show.</p>;

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
