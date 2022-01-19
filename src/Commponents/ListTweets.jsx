import React, {useContext} from 'react';
import "./ListTweet.css";
import TweetCard from './TweetCard'; 
import { AppContext } from '../Hooks/AppContext';

export default function ListTweets(){

    const {tweetList} = useContext(AppContext);

/*     const msj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
 */    return (
            <div className='feed-list-container'>
                
                {/* <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
                <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
                <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} /> */}
                
                {tweetList.map((tweet)=>{
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
                }
            </div>
        
    )
};