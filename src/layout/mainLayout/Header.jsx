import { Layout, Menu, Button, Flex } from "antd";
import { SunOutlined } from "@ant-design/icons";
import { IconButton } from "../../components/customComponents/IconButton";
import { SearchProvider } from "../../contexts/SearchContext";
import { SearchButton } from "../../components/searchComponents/SearchButton";
import { SearchBox } from "../../components/searchComponents/SearchBox";
import { Link } from "react-router";
import Logo from "../../components/customComponents/Logo";

const { Header } = Layout;
export default function CustomHeader() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
      }}
    >
      <SearchProvider>
        <Flex align="center" gap={32}>
          <Logo />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: <Link to="/">Coins</Link> },
              { key: "2", label: <Link to="/exchanges">Exchanges</Link> },
              { key: "3", label: <Link to="/contact-us">Contact us</Link> },
            ]}
            style={{ flex: 1, minWidth: 0, borderBottom: "none" }}
          />
        </Flex>
        <Flex gap="small" align="center">
          <Button type="default">
            <Link to="/login">Log In</Link>
          </Button>
          <Button type="primary">
            <Link to="/register">Sing Up</Link>
          </Button>
          <SearchBox />
          <SearchButton />
          <IconButton>
            <SunOutlined />
          </IconButton>
        </Flex>
      </SearchProvider>
    </Header>
  );
}
