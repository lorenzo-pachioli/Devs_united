import React, {useContext} from "react";
import "./User.css"
import "../Commponents/User/UserPost.css";
import UserTopBar from "../Commponents/User/UserTopBar";
import { AppContext } from '../Hooks/AppContext';
import TweetCard from "../Commponents/TweetCard";

export default function OtherUser(){

    const {user, otherUser, tweetList} = useContext(AppContext);
    const postList = tweetList.filter((tweet)=> {
        return tweet.uid === otherUser.uid;
    })
    console.log(postList);

    const backColor= {
        backgroundColor:"#FFEA5C"
    }


    const ShowResult = ()=> {
        return(
            <div>
                { user.likes.length > 0 ? (
                postList.map((tweet)=>{
                    const heartColor = user.likes.some((ID)=>{
                        if(ID === tweet.id){
                            return true;
                        }else{
                            return false;
                        }
                    })
                    return(
                        <div key={postList.indexOf(tweet)} >
                             <TweetCard 
                                uid={tweet.uid}
                                Name={tweet.Name}
                                Tweet={tweet.Tweet}
                                Likes={tweet.likes}
                                photo={tweet.photo}
                                Date={tweet.date}
                                id={tweet.id}
                                heartOnOff = {heartColor }
                                />
                        </div>
                    )
                    }
                    )
                    ) : (<div>Loading...</div>)
                }
            </div>
        )
    }


    return(
        <div>
            <UserTopBar />
            <div className="user-title">
                <img src={`${otherUser.photo}`} alt="img not found" />
                <h1 style={backColor}>{`${otherUser.Name}`}</h1>
            </div>
            

            <div className="post-container">
               <ShowResult />
                
            </div>
            

        </div>
    )
}