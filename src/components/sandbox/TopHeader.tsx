



import { NavigationBar } from "actify";
import "./TopHeader.scss";
import { Avatar } from "@mui/material";


export default function TopHeader() {
  return (
    <NavigationBar>
      <div style={{ position: "absolute", right: "16px" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </div>
    </NavigationBar>
  );
}


