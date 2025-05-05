import Router from "./routes";
import { ConfigProvider, theme, App as AntdApp } from "antd";
import { themeTokens } from "./theme/tokens";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AssetsProvider } from "./contexts/AssetsContext";
import { ExchangesProvider } from "./contexts/ExchangesContext";
import { AuthProvider } from "./contexts/AuthProvider";

export default function App() {
  return (
    <ConfigProvider theme={themeTokens}>
      <AntdApp>
        <GlobalStyles theme={themeTokens} />
        <AssetsProvider>
          <ExchangesProvider>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </ExchangesProvider>
        </AssetsProvider>
      </AntdApp>
    </ConfigProvider>
  );
}
