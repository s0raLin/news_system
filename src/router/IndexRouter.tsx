import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";

const token = localStorage.getItem('token');
export default function IndexRouter() {
  return (
    // 利用 URL 的 # hash 部分 来控制页面路由，而不会向服务器发送新的请求
    <HashRouter> 
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* 如果未授权就去登录 */}
        <Route path="/" element={token ? <NewsSandBox /> : <Login />}></Route>
      </Routes>
    </HashRouter>
  );
}
