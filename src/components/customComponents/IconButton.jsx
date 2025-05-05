import styled from "styled-components";
import { Button } from "antd";
import { themeTokens } from "../../theme/tokens";

export const IconButton = styled(Button)`
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  padding: 0;
  box-shadow: none;
  color: ${({ active, theme }) =>
    active ? themeTokens.token.colorPrimary : "inherit"};
`;
