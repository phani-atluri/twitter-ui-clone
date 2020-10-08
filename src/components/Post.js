import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "../css/post.css";

function Post({
  DisplaName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  const [fav, setFav] = useState(0);

  return (
    <div className="post">
      <Avatar />
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Phani Atluri
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
            @phaniatluri{" "}
            <span>
              {" "}
              &nbsp;{" "}
              {timestamp.substring(0, 3) +
                " " +
                timestamp.substring(timestamp.length - 2, timestamp.length)}
            </span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon className="chat" />
          <RepeatOutlinedIcon className="repeat" />
          <div className="fav">
            <FavoriteBorderIcon onClick={() => setFav(fav + 1)} />
            {fav !== 0 ? <span>{fav}</span> : <span></span>}
          </div>
          <ShareIcon className="share" />
        </div>
      </div>
    </div>
  );
}

export default Post;
