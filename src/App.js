import "./App.css";
import styled from "styled-components";

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

function App() {
  return (
    <Wrapper>
      <h1 className="mb-8  px-4 text-2xl font-bold">
        Welcome to Shape Twitter. A place for your thoughts.
      </h1>
      {/* THIS IS WHERE YOU START, YOUR TWEETS SHOULD APPEAR BELOW. */}
      <div className="flex h-full flex-col overflow-scroll">
        {TWEETS.map(({ id, tweet, user }) => (
          <Tweet id={id} tweet={tweet} user={user} />
        ))}
      </div>
    </Wrapper>
  );
}

// Tweet component
const Tweet = ({ id, tweet, user }) => {
  return (
    <div
      className="flex cursor-pointer gap-3 border-b-[1px] border-gray-100 px-4 py-3 transition-all hover:bg-gray-100"
      key={id}
    >
      <img
        className=" h-12 w-12 rounded-full object-cover"
        src={user.avatar}
        alt="avatar"
      />
      <div className=" min-w-0">
        {/* Tweet Header */}
        <div className="flex">
          <span className="truncate">
            <a href="#" className=" font-bold decoration-2 hover:underline">
              {user.displayName}{" "}
            </a>
            <span className=" text-gray-500">@{user.username} </span>
          </span>
          <span className="flex-shrink-0 text-gray-500">· 17h</span>
        </div>

        {/* Tweet Body */}
        <p className="mb-3">{tweet}</p>

        {/* Tweet Footer Buttons */}
        <div className="flex max-w-sm justify-between text-gray-500">
          {/* Button */}
          <ActionButton Icon={CommentsButton} color="blue">
            42
          </ActionButton>
          <ActionButton Icon={RetweetButton} color="green">
            51
          </ActionButton>
          <ActionButton Icon={LikeButton} color="red">
            99
          </ActionButton>
          <ActionButton
            Icon={ShareButton}
            color="blue"
            onClick={() => alert("holá")}
          />
        </div>
      </div>
    </div>
  );
};

// Abstraction of Icon component
const ActionButton = ({ Icon, color, children, onClick }) => {
  const colors = {
    blue: {
      hoverText: "hover:text-sky-500",
      hoverFill: "group-hover:fill-sky-500",
      hoverBg: "group-hover:bg-sky-500",
    },
    green: {
      hoverText: "hover:text-green-500",
      hoverFill: "group-hover:fill-green-500",
      hoverBg: "group-hover:bg-green-500",
    },
    red: {
      hoverText: "hover:text-rose-500",
      hoverFill: "group-hover:fill-rose-500",
      hoverBg: "group-hover:bg-rose-500",
    },
  };
  return (
    <button
      className={`group flex items-center gap-2 text-sm transition-all ${colors[color].hoverText}`}
      onClick={onClick}
    >
      <div className="relative ">
        <Icon
          className={`h-[18.75px] w-[18.75px] fill-gray-500 ${colors[color].hoverFill} transition-all`}
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-full">
          <div
            className={`rounded-full p-[18px] opacity-10  transition-all  ${colors[color].hoverBg} group-active:opacity-20`}
          ></div>
        </div>
      </div>
      {children}
    </button>
  );
};

const CommentsButton = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
    {...props}
  >
    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366a8.13 8.13 0 0 1 8.129 8.13c0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067A8.005 8.005 0 0 1 1.751 10zm8.005-6a6.005 6.005 0 1 0 .133 12.01l.351-.01h1.761v2.3l5.087-2.81A6.127 6.127 0 0 0 14.122 4H9.756z" />
  </svg>
);
const RetweetButton = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
    {...props}
  >
    <path d="m4.5 3.88 4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 0 1-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5a4 4 0 0 1 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
  </svg>
);
const LikeButton = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
    {...props}
  >
    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.439 3.439 0 0 0-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.417 5.417 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.417 5.417 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67z" />
  </svg>
);
const ShareButton = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
    {...props}
  >
    <path d="m12 2.59 5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
  </svg>
);

export default App;

// styled components that we use in majority of our projects
// check them out, they're pretty cool
const Wrapper = styled.div`
  max-width: 576px;
  width: 100%;
  margin: 0 auto;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border-inline: 1px solid #f1f5f9;
`;
