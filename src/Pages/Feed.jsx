import React from "react";
import "./Feed.css";
import FeedTopBar from "../Commponents/Feed/FeedTopBar";
import InputTweet from "../Commponents/Feed/InputTweet";
import ListTweets from "../Commponents/Feed/ListTweets";

export default function Feed(){
    return(
        <div className="feed-container"  > 
            <FeedTopBar />
            <InputTweet />
            <ListTweets />
        </div>
    )
}