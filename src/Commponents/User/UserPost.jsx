import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./UserPost.css";
import TweetCard from '../TweetCard'; 
import { AppContext } from '../../Hooks/AppContext';

export default function UserPost(){

    const {tweetList, user, usersList} = useContext(AppContext);
    const postList = tweetList.filter((tweet)=> {
        return tweet.uid === user.uid;
    })
    
    const ShowResult = ()=> {
        return(
            <div>
                { user.likes.length >= 0 ? (
                postList.map((tweet)=>{
                    const heartColor = user.likes.some((ID)=>{
                        if(ID === tweet.id){
                            return true;
                        }else{
                            return false;
                        }
                    })
                    const thisUser = usersList.find((u)=>{
                        return tweet.uid === u.uid
                    })
                    return(
                        <div key={postList.indexOf(tweet)} >
                             {thisUser ? (
                                    <TweetCard 
                                    uid={tweet.uid}
                                    Name={thisUser.username ? (thisUser.username):(tweet.Name)}
                                    color={thisUser.color}
                                    Tweet={tweet.Tweet}
                                    Likes={tweet.likes}
                                    photo={tweet.photo}
                                    Date={tweet.date}
                                    id={tweet.id}
                                    heartOnOff = {heartColor }
                                    />
                                ): (<div></div>)}
                        </div>
                    )
                    }
                    )
                    ) : (<div>Loading...</div>)
                }
            </div>
        )
    }

    return (
        <div className="post-container">
            <div className="post-top">
                <h2>POST</h2>
                <Link to="/user/favorites" className="link" >FAVORITES </Link>
            </div>
            {Object.keys(user).length > 0 ? (
                <ShowResult />

            ):(
                <div>Loading...</div>
                    
            )}
        </div>
    )
}