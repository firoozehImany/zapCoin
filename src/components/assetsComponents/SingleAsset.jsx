import { useSingleAsset } from "../../hooks/useSingleAsset";
import { Image, Flex, Typography } from "antd";
import { assetsIconUrl } from "../../services/assetService";
import { formatCurrency } from "../../utils/numberUtils";
import { ColoredText } from "../customComponents/ColoredText";

const { Title, Text } = Typography;
export default function SingleAsset() {
  const { asset, loading, error } = useSingleAsset();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!asset) return <p>Can't find data.</p>;

  const { symbol, name, alt, priceUsd, changePercent24Hr, noIconUrl } = asset;
  const price = formatCurrency(priceUsd);

  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <Flex align="center" gap="8px">
        <Image
          src={assetsIconUrl(symbol)}
          alt={alt}
          width={48}
          fallback={noIconUrl}
        />
        <Title level={1} style={{ marginTop: 0 }}>
          {name}
        </Title>
        <Title level={1}> Price ({symbol})</Title>
      </Flex>
      <Flex align="center" gap={12} style={{ marginTop: 16 }}>
        <Title level={4} style={{ marginTop: 0 }}>
          {symbol} to USDT: 1 {name} equals {price} USD
        </Title>
        <ColoredText style={{ fontSize: 20 }} change={changePercent24Hr} />
      </Flex>
    </div>
  );
}
