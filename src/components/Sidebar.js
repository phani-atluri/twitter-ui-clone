import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import Notification from "@material-ui/icons/NotificationsNone";
import Message from "@material-ui/icons/MailOutline";
import Bookmark from "@material-ui/icons/BookmarkBorderOutlined";
import List from "@material-ui/icons/ListAltSharp";
import Avatar from "@material-ui/icons/PermIdentityOutlined";
import Home from "@material-ui/icons/HomeOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sideBar">
      <TwitterIcon className="sidebar__icon" />
      <SidebarOptions active text="Home" Icon={Home} />
      <SidebarOptions text="Notifications" Icon={Notification} />
      <SidebarOptions text="Messages" Icon={Message} />
      <SidebarOptions text="Bookmarks" Icon={Bookmark} />
      <SidebarOptions text="Lists" Icon={List} />
      <SidebarOptions text="Profiles" Icon={Avatar} />
      <SidebarOptions text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
