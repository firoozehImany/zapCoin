import { Layout, Row, Col } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

const { Content } = Layout;
export default function MainLayout() {
  return (
    <Layout>
      <Content>
        <Header />
        <Content>
          <Row justify="center">
            <Col xs={24} sm={22} md={22} lg={22} xl={22}>
              <Outlet />
            </Col>
          </Row>
        </Content>
        <Footer />
      </Content>
    </Layout>
  );
}
