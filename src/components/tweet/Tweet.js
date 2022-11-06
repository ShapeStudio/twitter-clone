import React, { useState } from "react";
import "./Tweet.css";
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

export const Tweet = ({ tweet, userAvatar, displayName, username }) => {
  const [likes, setLikes] = useState(12320);
  const [liked, setLiked] = useState(false);

  const likeTweet = () => {
    // Dummy function that enables liking a particular tweet just to add some interactivity to the static page
    setLiked(!liked);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <div className="tweet_container">
      <div className="user_avatar_container">
        <img src={userAvatar} className="user_avatar" alt="user_avatar" />
      </div>
      <div className="content">
        <div className="author">
          <div className="author_name">{displayName}</div>
          <div className="author_username">@{username}</div>
        </div>
        <div className="text">{tweet}</div>
        <div className="engagement">
          <div className="engagement_section">
            <FaRegComment className="icon" />
            <div>912</div>
          </div>
          <div className="engagement_section">
            <FaRetweet className="icon" />
            <div>1230</div>
          </div>
          <div className="engagement_section" onClick={() => likeTweet()}>
            {liked ? (
              <FaHeart className="icon" />
            ) : (
              <FaRegHeart className="icon" />
            )}
            <div>{likes}</div>
          </div>
          <div className="engagement_section">
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  );
};
