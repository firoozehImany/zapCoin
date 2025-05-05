import { formatPercentage } from "../../utils/numberUtils";
import { Typography } from "antd";
const { Text } = Typography;

export const ColoredText = ({ change, style = {} }) => {
  const parsedChange = parseFloat(change);
  const formattedChange = formatPercentage(parsedChange);

  const isPositive = parsedChange > 0;
  const isNegative = parsedChange < 0;

  return (
    <Text
      style={style}
      type={isPositive ? "success" : isNegative ? "danger" : "default"}
    >
      {formattedChange}
    </Text>
  );
};
