import Highcharts from "highcharts";
import moment from "moment";
import { customColors } from "../theme/customColors";
import { formatLargeNumber } from "./numberUtils";

const { primary } = customColors;

export const getChartOptions = ({ chartData, assetId }) => ({
  chart: {
    type: "area",
    backgroundColor: "transparent",
  },
  title: {
    text: null,
  },
  xAxis: {
    type: "datetime",
    labels: {
      step: 1,
      formatter: function () {
        return moment(this.value).format("MMM D");
      },
    },
    lineColor: "#ccc",
  },
  yAxis: {
    title: {
      text: null,
    },
    opposite: true,
    labels: {
      formatter: function () {
        return formatLargeNumber(this.value);
      },
    },
    tickAmount: 10,
  },
  tooltip: {
    shared: true,
    xDateFormat: "%Y-%m-%d %H:%M",
    valueDecimals: 2,
    valuePrefix: "$",
  },
  series: [
    {
      name: assetId,
      data: chartData,
      color: primary,
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, Highcharts.color(primary).setOpacity(0.4).get("rgba")],
          [1, Highcharts.color(primary).setOpacity(0).get("rgba")],
        ],
      },
    },
  ],
  credits: {
    enabled: false,
  },
});
