import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/tweetbox.css";
import Button from "@material-ui/core/Button";

function TweetBox({ Tweet }) {
  const [tweet, setTweet] = useState("");
  //const [tweetprop, setTweetprop] = useState("");

  var getTime = () => {
    var dt = new Date();
    var mlist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return mlist[dt.getMonth()] + "" + dt.getDate().toString();
  };

  var tweetbtn = () => {
    Tweet(tweet, getTime());

    setTweet("");
  };
  return (
    <div className="tweetBox">
      <div className="tweet__input">
        <Avatar />
        <textarea
          rows={1}
          placeholder="What's happening"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
      </div>
      <div className="tweet__button">
        <Button variant="outlined" onClick={tweetbtn}>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default TweetBox;
