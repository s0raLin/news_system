import { Menu } from "antd";
import "./index.css";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";

const menuList = [
  menuItem({ key: "/home", label: "首页" }),
  menuItem({
    key: "/user-manage",
    label: "用户管理",
    children: [menuItem({ key: "/user-manage/list", label: "用户列表" })],
  }),
  menuItem({
    key: "/right-manage",
    label: "权限管理",
    children: [
      menuItem({
        key: "/right-manage/role/list",
        label: "角色列表",
      }),
      menuItem({
        key: "/right-manage/right/list",
        label: "权限列表",
      }),
    ],
  }),
  menuItem({
    key: "4",
    label: "新闻管理",
  }),
  menuItem({
    key: "5",
    label: "审核管理",
  }),
  menuItem({
    key: "6",
    label: "发布管理",
  }),
];

interface MenuItemProps {
  key: string;
  label: string;
  children?: MenuItemProps[];
}
function menuItem({ key, label, children }: MenuItemProps) {
  return { key, label, children };
}

export default function SideMenu({ collapsed }: { collapsed: boolean }) {
  const navigate = useNavigate();
  function handleMenuClick(e: unknown) {
    navigate((e as MenuItemProps).key);
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">全球新闻发布管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuList}
        onClick={handleMenuClick}
      />
    </Sider>
  );
}
