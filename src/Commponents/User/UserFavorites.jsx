import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import TweetCard from '../TweetCard'; 
import "./UserFavorites.css";
import { AppContext } from '../../Hooks/AppContext';

export default function UserFavorites(){
    const {tweetList, user, usersList} = useContext(AppContext);
    /* const [heartColor, setColor] = useState(false) */
    const favList = tweetList.filter((tweet)=> {

        const fav = user.likes.some((ID)=>{
            if(ID === tweet.id){
                return true;
            }else{
                return false;
            }
        })
        return fav>0 ? (true):(false);
    })

    const ShowResult = ()=> {
        return(
            <div>
                { user.likes.length >= 0 ? (
                favList.map((tweet)=>{
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
                        <div key={favList.indexOf(tweet)} >
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
        <div className="favorite-container">
            <div className="favorite-top">
                <Link to="/user/post" className="link">POST</Link>
                <h2>FAVORITES</h2>
                
            </div>
            {Object.keys(user).length > 0 ? (
                <ShowResult />

            ):(
                <div>Loading...</div>
                    
            )}
        </div>
    )
}