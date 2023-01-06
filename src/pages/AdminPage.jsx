import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import ShowOrders from "../components/Admin/Table/ShowOrders";
import useOrder from "../services/api/useOrder";
import { logo_blue } from "../assets/images/logo";

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
  getItem("Dashboard", "/admin", <DesktopOutlined />),
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
          }}
        >
          <img src={logo_blue} alt="" />
        </div>
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
              paddingLeft: 30,
              background: colorBgContainer,
              textAlign: "center",
            }}
          >
            <h1 className="text-2xl font-bold text-[#232730] leading-[60px]">
              DASHBOARD ADMIN
            </h1>
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
              <Breadcrumb.Item>Order</Breadcrumb.Item>
              <Breadcrumb.Item>flight</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <ShowOrders />
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
