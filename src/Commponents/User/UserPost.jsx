import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./UserPost.css";
import TweetCard from '../TweetCard'; 
import { AppContext } from '../../Hooks/AppContext';

export default function UserPost(){

    const {tweetList, user} = useContext(AppContext);
    const postList = tweetList.filter((tweet)=> {
        return tweet.uid === user.uid;
    })
    console.log(postList);
    console.log(tweetList)

    return (
        <div className="post-container">
            <div className="post-top">
                <h2>POST</h2>
                <Link to="/user/favorites" className="link" >FAVORITES </Link>
            </div>
            {postList.map((tweet)=>{
                    return(
                        <div key={postList.indexOf(tweet)} >
                            <TweetCard 
                            id={tweet.uid}
                            Name={tweet.name}
                            Tweet={tweet.tweet}
                            Likes={tweet.likes}
                            photo={tweet.photo}
                            Date={"5 june"}
                            />
                        </div>
                    )
                    }
                    )
                }
        </div>
    )
}