import "./App.css";
import styled from "styled-components";
import { Tweets } from "./components/tweets/Tweets";
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

const getDataAsync = () => {
  // function was added so that I simulate API call to get data which we receive with a delay so we have to handle it differently than static data in code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = TWEETS; // data would be otherwise received from an API but here we have them hardcoded
      const rnd = Math.random(); // this variable is used just to simulate a possible error with API call
      if (rnd > 0.2) {
        // error handling in case something went wrong with API call
        // if this was a real API call I would just check if it returned data or null
        resolve({ status: 200, tweets: data });
      } else {  // error is triggered with a 20% chance due to variable rnd
        resolve({ status: 404, message: "Tweets not found" });
      }
    }, 1000);
  });
};

async function getTweets(setTweets, setError) {
  // simulating async call to get data
  const data = await getDataAsync();
  if (data.status === 200) {
    setTweets(data.tweets);
  } else {
    setError(`${data.status}: ${data.message}`);
  }
}

function App() {
  const [tweets, setTweets] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTweets(setTweets, setError);
  }, []); // it doesn't have dependencies so it will be called only at the start

  return (
    <Wrapper>
      <h1 className="title">
        Welcome to Shape Twitter. A place for your thoughts.
      </h1>
      <div className="line" />
      <h1 className="error">{error}</h1>
      {/* THIS IS WHERE YOU START, YOUR TWEETS SHOULD APPEAR BELOW. */}
      {!error && <Tweets tweets={tweets} />}
    </Wrapper>
  );
}

export default App;

// styled components that we use in majority of our projects
// check them out, they're pretty cool
const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;
