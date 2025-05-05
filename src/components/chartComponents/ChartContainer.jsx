import { useState } from "react";
import { Menu } from "antd";
import AssetChart from "./AssetsChart";

export default function ChartContainer() {
  const [interval, setInterval] = useState("d1");

  const intervals = [
    { key: "h1", label: "1H" },
    { key: "d1", label: "1D" },
    { key: "w1", label: "1W" },
    { key: "M1", label: "1M" },
    { key: "y1", label: "1Y" },
  ];

  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["d1"]}
        selectedKeys={[interval]}
        onClick={({ key }) => setInterval(key)}
        items={intervals}
        style={{ flex: 1, minWidth: 0, borderBottom: "none" }}
      />
      <AssetChart interval={interval} />
    </div>
  );
}
