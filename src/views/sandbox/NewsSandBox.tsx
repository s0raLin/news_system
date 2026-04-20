import { Navigate, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import NoPermission from "./no-permission/NoPermission";
// import "./NewsSandBox.scss";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

export default function NewsSandBox() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <SideMenu collapsed={collapsed} />
      <Layout>
        <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 64px)",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-manage/list" element={<UserList />} />
            <Route path="/right-manage/role/list" element={<RoleList />} />
            <Route path="/right-manage/right/list" element={<RightList />} />

            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<NoPermission />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
