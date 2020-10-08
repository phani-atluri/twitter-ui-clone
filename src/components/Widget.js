import React from "react";
import "../css/widget.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
function Widget() {
  return (
    <div className="widget">
      <div className="widget__Input">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget__Container">
        <h2>What's happening</h2>
        <div className="widget__tweet">
          <TwitterTweetEmbed tweetId={"1291599538977779714"} />
        </div>
        <div className="twitterMoment">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="airindiain"
            options={{ height: 400 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Widget;
