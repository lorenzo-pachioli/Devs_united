import React, {useContext, useState} from "react";
import "./TweetCard.css";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import userImg from "../Resourses/user.png";
import { AppContext } from '../Hooks/AppContext';

export default function TweetCard({id, uid, Likes, Tweet, Name, Date, photo}){

    const {setTweetDelete, setButtonDelete, buttonDelete, user, tweetList, setUpdate, setList} = useContext(AppContext);

    const [heartOnOff, setHeart] = useState(false)

    const handleDelete =()=>{
        setTweetDelete(`${id}`)
        setButtonDelete(true)
        
        console.log(buttonDelete);
    }


    const handleLikes = () => {
        const changeLike = ()=>{
            if(heartOnOff){
                setHeart(false)
            }
        }
        changeLike();

        user.likes.filter((ID) =>{
            if(ID === id){
                return (true)
            }else{
                setHeart(true)
                user.likes.push(id)
                return (false);
            }
        })
        console.log(heartOnOff)
        

        const ID = String(id);
        console.log(user.likes)

        const newList = tweetList.map((tweet)=>{
          if(tweet.id === ID){
            const newLike = {
              ...tweet,
              likes: tweet.likes + 1,
              
            }
            
            
            setUpdate(newLike);
            
            
            return newLike;
          }else{
            return tweet;
          }
        });
        setList(newList);

         
        
    
      }


      

     
    

    const namebackground = {
        backgroundColor: "#800FFF"
    }

    return (
        <div className="card" >
             <div className="card-container" >
                <div className="card-img">
                    {photo  != null ? (
                        <img src={photo} alt="" />
                    ) : (
                        <img src={userImg} alt="" />
                    )}
                    
                </div>
                <div className="card-subcontainer">
                    <div className="name-date">
                        <div className="name" style={namebackground}>{Name}</div> 
                        <div className="date">- {`${Date}`} </div>
                        {user.uid === uid? (
                             <button onClick={handleDelete} value={buttonDelete} className="delete"> X </button>
                        ) : ("")}
                        
                        
                    </div>
                    
                    <div className="tweet">{Tweet}</div>
                    <div className="likes">
                        <button name = "Likes" onClick={handleLikes} value={id}>
                        {heartOnOff ? (
                            <img src={heartOn} alt="img not found" />
                        ) : (
                            <img src={heartOff} alt="img not found" />
                        )}

                        
                    
                        </button>
                        <div>{Likes}</div>
                    </div>
                </div>
            </div>
             <hr width="100%" />               
        </div>
       
    )
}