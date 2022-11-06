import React from "react";
import { Tweet } from "../tweet/Tweet";
import { Spinner } from "../spinner/Spinner";
import "./Tweets.css";

export const Tweets = ({ tweets }) => {
  return (
    <div className="tweets_container">
      {tweets ? (
        tweets.map((tweet) => (
          <Tweet
            tweet={tweet.tweet}
            userAvatar={tweet.user.avatar}
            displayName={tweet.user.displayName}
            username={tweet.user.username}
            key={tweet.id}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};
