import { Link } from "react-router";
import { Button, Form, Input, Select, Space, App } from "antd";
import { api } from "../utils/api";
import { useNavigate } from "react-router";
import Logo from "../components/customComponents/Logo";
const { Item } = Form;

export default function Register() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      await api.post("register", values);
      message.success("your registration has been successfully");
      navigate("/");
    } catch (e) {
      message.error(e.response.data.errors);
    }
  };

  return (
    <>
      <Logo />
      <h1>Register</h1>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Item
          name="email"
          label="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="email" placeholder="email" />
        </Item>
        <Item
          name="password"
          label="password"
          rules={[
            {
              required: true,
            },
            {
              min: 6,
              message: "password must be 6",
            },
          ]}
        >
          <Input.Password placeholder="password" />
        </Item>
        <Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="name" />
        </Item>
        <Item>
          <Button size="large" type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
}
