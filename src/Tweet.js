import React from "react";
import "./Tweet.css";
import { TWEETS } from "./App";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

export default function Tweet() {
  return (
    <>
      {TWEETS.map((data, key) => {
        return (
          <div className="tweet" key={key}>
            <div className="tweet-avatar">
              <Avatar src={data.user.avatar} />
            </div>
            <div className="tweet-body">
              <div className="tweet-header">
                <div className="tweet-headerText">
                  <h3>
                    {data.user.displayName}{" "}
                    <span className="tweet-headerSpecial">
                      <VerifiedUserIcon className="tweet-badge" /> @
                      {data.user.username}
                    </span>
                  </h3>
                </div>
                <div className="tweet-headerDescription">
                  <p>{data.tweet}</p>
                </div>
              </div>
              <div className="tweet-footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <ShareIcon fontSize="small" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
