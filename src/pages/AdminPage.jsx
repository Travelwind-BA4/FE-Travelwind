import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "/admin", <PieChartOutlined />),
  getItem("Users", "/admin/user", <UserOutlined />),
  getItem("Data", "sub1", <DesktopOutlined />, [
    getItem("Country", "data/country"),
    getItem("City", "data/city"),
    getItem("Airport", "data/airport"),
    getItem("Airplane", "data/airplane"),
    getItem("Terminal", "data/terminal"),
    getItem("Gate", "data/gate"),
    getItem("Schedule", "data/schedule"),
  ]),
  getItem("Sign Out", "/login", <LogoutOutlined />),
];

const SideBar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          icon=""
          onClick={({ key }) => {
            if (key === "signout") {
              navigate("/login");
            } else {
              navigate(key);
            }
          }}
          items={items}
        />
      </Sider>
      <>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            Header
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              Content
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            TravelWind ©2022
          </Footer>
        </Layout>
      </>
    </Layout>
  );
};
export default SideBar;
