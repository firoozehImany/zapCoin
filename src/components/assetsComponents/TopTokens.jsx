import { Card, Col, Row } from "antd";
import { useAssets } from "../../contexts/AssetsContext";

const formatPrice = (price) =>
  parseFloat(price).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const TopAssetsCards = () => {
  const { assets } = useAssets();

  const top3 = [...assets]
    .sort((a, b) => b.marketCapUsd - a.marketCapUsd)
    .slice(0, 4);

  return (
    <Row gutter={[16, 16]}>
      {top3.map((asset) => {
        const change = parseFloat(asset.changePercent24Hr);
        const price = formatPrice(asset.priceUsd);
        const isPositive = change >= 0;
        const changeColor = isPositive ? "green" : "red";
        const logoUrl = `https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`;

        return (
          <Col xs={24} sm={12} md={6} key={asset.id}>
            <Card
              hoverable
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <img
                    src={logoUrl}
                    alt={asset.symbol}
                    width={24}
                    height={24}
                  />
                  <span>
                    {asset.name} ({asset.symbol})
                  </span>
                </div>
              }
            >
              <p>Price: ${price}</p>
              <p style={{ color: changeColor }}></p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default TopAssetsCards;
