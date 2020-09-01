import React from "react";

import Avatar from "@material-ui/core/Avatar/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}));

function getInitials(name) {
  let initials = "";

  name = name.split(" ");
  for (let i = 0; i < name.length; i++) {
    const word = name[i];
    initials += word[0];
  }

  return initials.toUpperCase();
}

function TopChannelsComponent({ name, followerCount, bgColor, online }) {
  const classes = useStyles();

  return (
    <div className="component">
      <div className="avatar">
        <Avatar className={classes.blue}>{getInitials(name)}</Avatar>
        <div className={`status ${online ? "online" : "offline"}`}></div>
      </div>
      <div className="meta">
        <div className="name title">{name}</div>
        <div className="followers subtitle">{followerCount} followers</div>
      </div>
    </div>
  );
}

export default TopChannelsComponent;
