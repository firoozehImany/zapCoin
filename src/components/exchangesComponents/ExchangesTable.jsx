import { Typography, Table } from "antd";
import { SmallText } from "../customComponents/SmallText";
import { Link } from "react-router-dom";
import { ColoredText } from "../customComponents/ColoredText";

const { Title, Text } = Typography;

export default function ExchangesTable({ data }) {
  const columns = [
    {
      title: <SmallText>Name</SmallText>,
      dataIndex: "name",
      width: "20%",
      render: (text, record) => (
        <Link to={`/exchanges/${record.id}`}>
          <Title level={5} style={{ marginTop: 0 }}>
            {record.name}
          </Title>
        </Link>
      ),
    },
    {
      title: <SmallText>Rank</SmallText>,
      dataIndex: "rank",
      align: "right",
      width: "20%",
      sorter: (a, b) => a.rank - b.rank,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>Trading Pairs</SmallText>,
      dataIndex: "tradingPairs",
      align: "right",
      width: "20%",
      sorter: (a, b) => a.tradingPairs - b.tradingPairs,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>24h Volume</SmallText>,
      dataIndex: "volumeUsd",
      align: "right",
      width: "20%",
      sorter: (a, b) => a.volumeUsdValue - b.volumeUsdValue,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>% Total Volume</SmallText>,
      dataIndex: "percentTotalVolume",
      render: (change) => <ColoredText change={change} />,
      align: "right",
      width: "20%",
      sorter: (a, b) => a.percentTotalVolumeValue - b.percentTotalVolumeValue,
      showSorterTooltip: false,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={{ pageSize: 30, showSizeChanger: false }}
      style={{ marginTop: 20, border: "none" }}
    />
  );
}
