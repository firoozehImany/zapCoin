import { Layout } from "antd";

const { Footer } = Layout;
export default function CustomFooter() {
  return (
    <Footer
      style={{ textAlign: "center", color: "#222", padding: "10px 20px" }}
    >
      © 2025 with love
    </Footer>
  );
}
