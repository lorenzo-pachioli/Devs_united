import React, {useContext} from 'react';
import "./ListTweet.css";
import TweetCard from '../TweetCard'; 
import { AppContext } from '../../Hooks/AppContext';

export default function ListTweets(){

    const {tweetList} = useContext(AppContext);

    return (
            <div className='feed-list-container'>
                
               
                
                {tweetList.map((tweet)=>{
                    return(
                        <div key={tweetList.indexOf(tweet)} >
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
};