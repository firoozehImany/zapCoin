import { useSingleExchange } from "../../hooks/useSingleExchange";
import { Flex, Typography } from "antd";
import { ColoredText } from "../customComponents/ColoredText";
import { formatLargeNumber } from "../../utils/numberUtils";

const { Title } = Typography;

export default function SingleExchange() {
  const { exchange, loading, error } = useSingleExchange();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!exchange) return <p>Can't find data.</p>;

  const { name, volumeUsd, percentTotalVolume, exchangeId, exchangeUrl } =
    exchange;
  const Volume = formatLargeNumber(volumeUsd);

  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <a href={exchangeUrl} target="_blank" rel="noopener noreferrer">
        {" "}
        <Flex align="center" gap="8px">
          <Title level={1} style={{ marginTop: 0 }}>
            {name}
          </Title>
          <Title level={1}> ({exchangeId})</Title>
        </Flex>
      </a>
      <Flex align="center" gap={12} style={{ marginTop: 16 }}>
        <Title level={4} style={{ marginTop: 0 }}>
          {name} Volume: {Volume} USD
        </Title>
        <ColoredText style={{ fontSize: 20 }} change={percentTotalVolume} />
      </Flex>
    </div>
  );
}
