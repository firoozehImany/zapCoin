export const parseToNumber = (currentNum) => {
  return typeof currentNum === "string" ? parseFloat(currentNum) : currentNum;
};

export const isValidValue = (currentNum) => {
  const number = parseToNumber(currentNum);
  return isNaN(number) || number === null ? "-" : number;
};

export const formatCurrency = (currentNum) => {
  const number = isValidValue(currentNum);
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatLargeNumber = (currentNum) => {
  const number = isValidValue(currentNum);
  let divisor = 1;
  let suffix = "";

  if (number >= 1e9) {
    divisor = 1e9;
    suffix = "B";
  } else if (number >= 1e6) {
    divisor = 1e6;
    suffix = "M";
  } else if (number >= 1e3) {
    divisor = 1e3;
    suffix = "K";
  }
  const formattedCurrency = formatCurrency(number / divisor);
  return formattedCurrency + suffix;
};

export const formatPercentage = (currentNum) => {
  const number = isValidValue(currentNum);
  if (isNaN(number) || number === "-") return "-";
  const percentage = number.toFixed(2);
  return number > 0 ? `+${percentage}%` : `${percentage}%`;
};
