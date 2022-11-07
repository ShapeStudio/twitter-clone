import "./App.css";
import { useState } from "react";
import NoPermission from "./NoPermission";

export default function Tweet(props) {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);
  const [text, setText] = useState(false);

  return (
    <>
      <div
        style={{
          margin: "24px 0px",
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
          padding: "8px",
          borderRadius: "4px",
        }}
        className="tweetContainer"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={props.tweet.user.avatar}
            height="60px"
            width="60px"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          <div style={{ margin: "8px" }}>
            <h4 style={{ margin: 0 }}>{props.tweet.user.displayName}</h4>
            <h5
              className={"button"}
              style={{
                margin: 0,
                color: "#AAA",
                cursor: "pointer",
              }}
            >
              @{props.tweet.user.username}
            </h5>
          </div>
          <div
            onClick={() => {
              setText(true);
              setTimeout(() => {
                setText(false);
              }, 1000);
            }}
            style={{ marginLeft: "auto" }}
          >
            <Settings />
          </div>
          <div
            style={{
              backgroundColor: "#51a5ea",
              padding: "1px",
              cursor: "pointer",
            }}
            onClick={() => setFollow(!follow)}
          >
            <h6 style={{ color: "white", margin: "8px 16px" }}>
              {follow ? "Following" : "Follow"}
            </h6>
          </div>
        </div>
        <h4>{props.tweet.tweet}</h4>
        <h6
          style={{
            margin: 8,
            color: "#AAA",
          }}
        >
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "solid 1px #dfdfdf",
            borderTop: "solid 1px #dfdfdf",
          }}
        >
          <div style={{ marginRight: "20px", display: "flex", padding: 8 }}>
            <h5 style={{ margin: "0px 2px 0px 0px" }}>543</h5>
            <h5 style={{ margin: 0, color: "grey" }}>Retweets</h5>
          </div>
          <div style={{ display: "flex", marginRight: "20px" }}>
            <h5 style={{ margin: "0px 2px 0px 0px" }}>100</h5>
            <h5 style={{ margin: 0, color: "grey" }}>Favorites</h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ margin: "0px 2px 0px 0px" }}>
              {1000 + (like ? 1 : 0)}
            </h5>
            <h5 style={{ margin: 0, color: "grey" }}>Likes</h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 12,
          }}
        >
          <div
            onClick={() => {
              setText(true);
              setTimeout(() => {
                setText(false);
              }, 1000);
            }}
          >
            <Comment />
          </div>

          <div
            onClick={() => {
              setText(true);
              setTimeout(() => {
                setText(false);
              }, 1000);
            }}
          >
            <Retweet />
          </div>
          <div onClick={() => setLike(!like)} style={{ cursor: "pointer" }}>
            {like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
          </div>
          <div
            onClick={() => {
              setText(true);
              setTimeout(() => {
                setText(false);
              }, 1000);
            }}
          >
            <Upload />
          </div>
        </div>
      </div>

      {text && <NoPermission text={text} />}
    </>
  );
}

function Settings() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-gear"
        viewBox="0 0 16 16"
        style={{ margin: 8 }}
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    </div>
  );
}

function Comment() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-chat"
      viewBox="0 0 16 16"
    >
      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
    </svg>
  );
}

function Retweet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-arrow-repeat"
      viewBox="0 0 16 16"
    >
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
      <path
        fillRule="evenodd"
        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
      />
    </svg>
  );
}

function Upload() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-upload"
      viewBox="0 0 16 16"
    >
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
    </svg>
  );
}
