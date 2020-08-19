import React from "react";

import IconButton from "Components/Layout/iconButton";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

function headerMenu() {
  return (
    <div className="header-menu">
      <ul>
        <li>
          <IconButton svgIcon={<HomeOutlinedIcon />} toPath="/home" />
        </li>
        <li>
          <IconButton svgIcon={<SearchOutlinedIcon />} toPath="/search" />
        </li>
        <li>
          <IconButton
            svgIcon={<PersonOutlineOutlinedIcon />}
            toPath="/profile"
          />
        </li>
        <li>
          <IconButton
            svgIcon={<ChatBubbleOutlineOutlinedIcon />}
            toPath="/chat"
          />
        </li>
        <li>
          <IconButton svgIcon={<SettingsOutlinedIcon />} toPath="/settings" />
        </li>
      </ul>
    </div>
  );
}

export default headerMenu;
