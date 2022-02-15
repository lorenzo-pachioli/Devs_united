import React, {useContext, useState} from "react";
import "./TweetCard.css";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import userImg from "../Resourses/user.png";
import { AppContext } from '../Hooks/AppContext';
import { Link } from "react-router-dom";

export default function TweetCard({id, uid, Likes, Tweet, Name, Date, photo, heartOnOff}){

    const {setTweetDelete, setButtonDelete, buttonDelete, user, tweetList, setUpdate, setList, setArrayDel,otherUser, setOtherUser} = useContext(AppContext);

    const [heartColor, setColor] = useState(heartOnOff)
   

    const handleDelete =()=>{
        setTweetDelete(`${id}`)
        setButtonDelete(true)
        
        console.log(buttonDelete);

    }

   

    const handleLikes = () => {
        const changeLike = ()=>{
            if(heartOnOff ){
                heartOnOff = false;
                setColor(false)
                
            }else{
                heartOnOff = true;
                setColor(true)
                
            }
        }
        changeLike();

        

        const ID = String(id);

        const newList = tweetList.map((tweet)=>{
          if(tweet.id === ID){

            if(heartOnOff){
                const newLike = {
                    ...tweet,
                    likes: tweet.likes + 1,
                    
                }
                setUpdate(newLike);
                user.likes.push(newLike.id)
                
                return newLike
            }else{
                const newLike = {
                    ...tweet,
                    likes: tweet.likes - 1,
                    
                  }
                  setUpdate(newLike);
                  setArrayDel(newLike);
                  user.likes.pop(newLike.id);
                  return newLike
            } 
          }else{
            return tweet;
          }
        });
        setList(newList);
      }

      const handleOtherUser = () => {
        setOtherUser({
            Name: Name,
            photo: photo, 
            uid: uid 
        })
        
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
                        {Object.keys(otherUser).length > 0 ? (<div>
                            {uid === user.uid ? (
                                <Link to="/user/post"  className="name" style={namebackground} >{Name}</Link>
                            ):(
                                <Link to="/otherUser" className="name" style={namebackground} onClick={handleOtherUser}>{Name}</Link>
                                
                            )}</div>
                            
                        ) : (
                            <div className="name" style={namebackground} onMouseMove={handleOtherUser}>{Name}</div>
                        )} 
                        <div className="date">- {Date} </div>
                        {user.uid === uid? (
                             <button onClick={handleDelete} value={buttonDelete} className="delete"> X </button>
                        ) : ("")}
                        
                        
                    </div>
                    
                    <div className="tweet">{Tweet}</div>
                    <div className="likes">
                        <button name = "Likes" onClick={handleLikes} value={id}>
                        {heartColor  ? (
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