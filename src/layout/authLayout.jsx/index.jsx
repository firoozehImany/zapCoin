import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router";

const { Content } = Layout;
export default function AuthLayout() {
  return (
    <Layout>
      <Content>
        <Row justify="center">
          <Col
            xs={18}
            sm={16}
            md={14}
            lg={12}
            xl={10}
            style={{ paddingTop: 80 }}
          >
            <Outlet />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
