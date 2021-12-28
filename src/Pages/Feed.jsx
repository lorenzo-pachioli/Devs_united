import React from "react";
import FeedTopBar from "../Commponents/Feed/FeedTopBar";
import InputTweet from "../Commponents/Feed/InputTweet";
import ListTweets from "../Commponents/Feed/ListTweets";

export default function Feed(){
    return(
        <div display="flex" width="100vw" higth="100vh"> 
            <FeedTopBar />
            <InputTweet />
            <ListTweets />
        </div>
    )
}