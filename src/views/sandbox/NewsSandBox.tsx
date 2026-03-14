import { Navigate, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import NoPermission from "./no-permission/NoPermission";
import "./NewsSandBox.scss";

import { Box } from '@mui/material';



export default function NewsSandBox() {

  return (
    <Box className="news-sandbox-layout">
      
      {/* 左侧菜单 */}
      <SideMenu />

      {/* 右侧区域 */}
      <Box className="main-content">
        
        {/* 顶部导航 */}
        <TopHeader />

        {/* 页面内容 */}
        <Box className="page-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-manage/list" element={<UserList />} />
            <Route path="/right-manage/role/list" element={<RoleList />} />
            <Route path="/right-manage/right/list" element={<RightList />} />

            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<NoPermission />} />
          </Routes>
        </Box>

      </Box>

    </Box>
  );
}
