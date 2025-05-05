import { Link } from "react-router";
import { Button, Form, Input, App } from "antd";
import { oauthApi } from "../utils/api";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import Logo from "../components/customComponents/Logo";
const { Item } = Form;

export default function LogIn() {
  const { user, token, setUserData, setTokenData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("grant_type", values.grant_type);
    formData.append("username", values.username);
    formData.append("password", values.password);
    try {
      const userToken = await oauthApi.post("/oauth/token", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTokenData(userToken.data);
      const userData = await oauthApi.get("api/user");
      console.log(userData);
      setUserData(userData.data);
      message.success("login successfully");
      navigate("/");
    } catch (e) {
      console.log(e);
      // message.error(e.response.data.errors);
    }
  };

  return (
    <>
      <Logo />
      <h1>Log in</h1>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Item name="grant_type" noStyle initialValue="password">
          <Input type="hidden" />
        </Item>
        <Item
          name="username"
          label="username"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
              message: "Please enter a valid email",
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
        <Item>
          <Button
            loading={loading}
            type="primary"
            block
            size="large"
            htmlType="submit"
          >
            Log In
          </Button>
        </Item>
      </Form>
    </>
  );
}
