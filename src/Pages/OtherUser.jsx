import React, {useContext, useEffect} from "react";
import "./User.css"
import "../Commponents/User/UserPost.css";
/* import UserTopBar from "../Commponents/User/UserTopBar"; */
import FeedTopBar from "../Commponents/Feed/FeedTopBar";
import { AppContext } from '../Hooks/AppContext';
import TweetCard from "../Commponents/TweetCard";

export default function OtherUser(){

    const {user, otherUser, setOtherUser, tweetList, usersList} = useContext(AppContext);
    
    

    useEffect(() => {
       const otherUserGet = ()=>{
        const uid = sessionStorage.getItem("uid" );
        const Name = sessionStorage.getItem("Name" );
        const photo = sessionStorage.getItem("photo");
        const color = sessionStorage.getItem("color");
        console.log(photo)
        if(Name !== null){
            setOtherUser({
                Name: Name,
                photo: photo, 
                uid: uid, 
                color: color 
            });
        }
        
       }
       otherUserGet();
    }, [setOtherUser]);
    const postList = tweetList.filter((tweet)=> {
        return tweet.uid === otherUser.uid;
    })

    

    const backColor= {
        backgroundColor:`${otherUser.color ? (otherUser.color) : ("#800FFF")}`
    }
    let borderUser = {
        border: `2px solid ${otherUser.color ? (otherUser.color) : ("#800FFF")}`
    }


    const ShowResult = ()=> {
        return(
            <div>
                { postList.map((tweet)=>{
                            const heartColor =user.likes ? ( user.likes.some((ID)=>{
                            
                                if(ID === tweet.id){
                                    return true;
                                }else{
                                    return false;
                                }
                            })):(false);

                            const thisUser = usersList.find((u)=>{
                                if(tweet.uid === u.uid){
                                    return true;
                                }else{
                                    return false;
                                }
                            })
                            return(
                                <div key={postList.indexOf(tweet)} >
                                    {<TweetCard 
                                    uid={tweet.uid}
                                    Name={thisUser ? (thisUser.username):(tweet.Name)}
                                    color={thisUser ? (thisUser.color):(tweet.color)}
                                    Tweet={tweet.Tweet}
                                    Likes={tweet.likes}
                                    photo={tweet.photo}
                                    Date={tweet.date}
                                    id={tweet.id}
                                    heartOnOff = {heartColor }
                                    />
                                    }
                                </div>
                            )
                        }
                        )
                    
                    }
                
            </div>
        )
    }


    return(
        <div>
            <FeedTopBar />
            <div className="user-title">
                <img src={`${otherUser.photo}`} style={borderUser} alt="img not found" />
                <h1 style={backColor}>{`${otherUser.Name}`}</h1>
            </div>
            

            <div className="post-container">
               <ShowResult />
                
            </div>
            

        </div>
    )
}