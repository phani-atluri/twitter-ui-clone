import React, { useState } from "react";
import TweetBox from "./TweetBox";
import "../css/feed.css";
import Post from "./Post";

function Feed() {
  const [feedTweet, setFeedTweet] = useState([]);
  var handleTweet = (tweets, time) => {
    if (tweets !== "") {
      setFeedTweet([...feedTweet, { tweets: tweets, time: time }]);
    }
  };

  return (
    <div className="feed">
      <h1>Home</h1>
      <TweetBox Tweet={handleTweet} />
      {console.log(feedTweet)}
      {feedTweet.map((tweet, i) => (
        <Post key={i} text={tweet.tweets} timestamp={tweet.time} />
      ))}
    </div>
  );
}

export default Feed;
