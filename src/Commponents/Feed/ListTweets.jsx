import React, {useContext} from 'react';
import "./ListTweet.css";
import TweetCard from '../TweetCard'; 
import { AppContext } from '../../Hooks/AppContext';

export default function ListTweets(){

    const {tweetList, user, usersList} = useContext(AppContext);
    
    const ShowResult = () => {
        
        return (
            <div>
                {
                   
                    tweetList.map((tweet)=> {
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
                            <div key={tweetList.indexOf(tweet)} >
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
                                    />}
                            </div>
                        )
                    }
                    )
                  
               }
                
            </div>
        )
    }
    
    return (
            <div className='feed-list-container'>
                <ShowResult />
            </div>
        
    )
};