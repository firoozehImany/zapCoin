import { Image, Flex, Typography, Table } from "antd";
import { SmallText } from "../customComponents/SmallText";
import { ColoredText } from "../customComponents/ColoredText";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
export default function AssetsTable({ data }) {
  const columns = [
    {
      title: <SmallText>Name</SmallText>,
      dataIndex: "name",
      width: "25%",
      render: (text, record) => (
        <Link to={`/assets/${record.id}`}>
          {" "}
          <Flex align="center" gap="8px">
            <Image
              src={record.iconUrl}
              alt={record.alt}
              fallback={record.noIconUrl}
              width={32}
            />
            <Title level={5} style={{ marginTop: 0 }}>
              {record.symbol}
            </Title>
            <Text type="secondary">{record.name}</Text>
          </Flex>
        </Link>
      ),
    },
    {
      title: <SmallText>Price</SmallText>,
      dataIndex: "price",
      align: "right",
      width: "15%",
      sorter: (a, b) => a.priceValue - b.priceValue,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>Change</SmallText>,
      dataIndex: "change",
      render: (change) => <ColoredText change={change} />,
      align: "right",
      width: "15%",
      sorter: (a, b) => a.changeValue - b.changeValue,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>24h volume</SmallText>,
      dataIndex: "volumeUsd24H",
      align: "right",
      width: "15%",
      sorter: (a, b) => a.volumeUsd24HValue - b.volumeUsd24HValue,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>Market Cap</SmallText>,
      dataIndex: "marketCap",
      align: "right",
      width: "15%",
      sorter: (a, b) => a.marketCapValue - b.marketCapValue,
      showSorterTooltip: false,
    },
    {
      title: <SmallText>Supply</SmallText>,
      dataIndex: "supply",
      align: "right",
      width: "15%",
      sorter: (a, b) => a.marketCapValue - b.marketCapValue,
      showSorterTooltip: false,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{ pageSize: 30, showSizeChanger: false }}
        style={{ marginTop: 20, border: "none" }}
      />
    </>
  );
}
