
import "./App.css";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";

//
// THOSE ARE THE TWEETS YOU NEED TO RENDER ON SCREEN, IMAGINE THOSE BEING SENT BACK FROM THE SERVER
//
const TWEETS = [
  {
    id: 1,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 2,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 3,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 4,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 5,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 6,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 7,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 8,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
  {
    id: 9,
    tweet:
      "This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...",
    user: {
      avatar:
        "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: "Mrs Avatar",
      username: "mrsavatar",
    },
  },
];

export default function App() {
  //simulate time that it takes for data to arrive from server, here we could also simulate any errors 
  //with new Promise and then Math.random() to determine whether it is a a success or an error
  //but I decided against it since if this was a real call we would just check what was returned
  const [data, setData] = useState(null);
  const simGetData = () => {
    const timer = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      setData(TWEETS);
    }, timer);
  };

  useEffect(() => {
    simGetData();
  }, []);

  return (
    <div style={{ maxWidth: "560px", width: "100%", margin: "0 auto" }}>
      <h1>Welcome to Shape Twitter. A place for your thoughts.</h1>

      {data ? (
        data.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)
      ) : (
        <div style={{ marginTop: "20vh", textAlign: "center" }}>
          <h1>Please wait...</h1>
          <h1>Your tweets are being loaded</h1>
        </div>
      )}
    </div>
  );
}

