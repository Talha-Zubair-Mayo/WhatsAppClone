import React from "react";
import "../Styles/Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import Sidebarchats from "./Sidebarchats";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searcContainer">
            <SearchOutlinedIcon />
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="sidebarchats">
            <Sidebarchats />
            <Sidebarchats />
            <Sidebarchats />
            
        </div>
      </div>
    </>
  );
}

export default Sidebar;
