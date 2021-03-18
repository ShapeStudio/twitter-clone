import './App.css';
import styled from 'styled-components';
import Tweet from './Tweet';
//
// THOSE ARE THE TWEETS YOU NEED TO RENDER ON SCREEN, IMAGINE THOSE BEING SENT BACK FROM THE SERVER
// 
export const TWEETS = [
  {
    id: 1,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 2,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 3,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 4,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 5,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 6,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 7,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 8,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
  {
    id: 9,
    tweet: 'This is the best tweet in the world. Even tho this is not actually a tweet. Oh wel...',
    user: {
      avatar: "https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg",
      displayName: 'Mrs Avatar',
      username: 'mrsavatar'
    }
  },
]


function App() {
  return (
    <Wrapper>
      <h1>Welcome to Shape Twitter. A place for your thoughts.</h1>

      <Tweet/>

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
`
