import React, {useContext} from 'react';
import "./ListTweet.css";
import TweetCard from '../TweetCard'; 
import { AppContext } from '../../Hooks/AppContext';

export default function ListTweets(){

    const {tweetList, user} = useContext(AppContext);

    const ShowResult = () => {
        return (
            <div>
                {
                   user.likes.length > 0 ? (
                    tweetList.map((tweet)=>{
                        const heartColor = user.likes.some((ID)=>{
                                if(ID === tweet.id){
                                    return true;
                                }else{
                                    return false;
                                }
                            })
                          
                        
                        return(
                            <div key={tweetList.indexOf(tweet)} >
                                <TweetCard 
                                uid={tweet.uid}
                                Name={tweet.name}
                                Tweet={tweet.tweet}
                                Likes={tweet.likes}
                                photo={tweet.photo}
                                Date={"5 june"}
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
    
    return (
            <div className='feed-list-container'>
                
                {Object.keys(user).length > 0 ? (
                    <ShowResult />

                ):(
                    <div>Loading...</div>
                    
                )}
               
                
            </div>
        
    )
};