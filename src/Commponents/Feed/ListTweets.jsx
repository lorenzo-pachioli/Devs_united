import React from 'react';
import "./ListTweet.css";
import TweetCard from '../TweetCard'; 

export default function ListTweets(){
    return (
            <div className='feed-list-container'>
                
                <TweetCard Name={"Lorenzo"} Tweet={"Hola mundo"} Likes={5} id={0} />
                <TweetCard Name={"Lorenzo"} Tweet={"Hola mundooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"} Likes={5} id={0} />
                <TweetCard Name={"Lorenzo"} Tweet={"Hola mundo"} Likes={5} id={0} />
                
                {/* {tweetList.map((tweet)=>{
                    return(
                        <div key={tweetList.indexOf(tweet)} >
                            <TweetCard 
                            id={tweet.id}
                            Name={tweet.Name}
                            Tweet={tweet.Tweet}
                            Likes={tweet.Likes}
                            />
                        </div>
                    )
                    }
                    )
                } */}
            </div>
        
    )
};